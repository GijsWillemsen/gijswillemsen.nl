import { DEFAULT_SITE_INFO } from "./defaults";

export interface Env {
  SITE_CONTENT: KVNamespace;
}

/** Allowed origins for CORS. */
const ALLOWED_ORIGINS = [
  "https://gijswillemsen.nl",
  "https://www.gijswillemsen.nl",
  "https://home.gijswillemsen.nl",
  "http://localhost:5173", // Vite dev server
  "http://localhost:4173", // Vite preview
];

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("Origin") ?? "";
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function jsonResponse(body: unknown, request: Request, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
      ...corsHeaders(request),
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(request),
      });
    }

    const url = new URL(request.url);

    // GET /api/site-info — main endpoint
    if (url.pathname === "/api/site-info" && request.method === "GET") {
      try {
        // Try to read from KV first
        const kvData = await env.SITE_CONTENT.get("site-info", "json");

        if (kvData) {
          return jsonResponse(kvData, request);
        }
      } catch {
        // KV read failed — fall through to defaults
      }

      // Return hardcoded defaults as fallback
      return jsonResponse(DEFAULT_SITE_INFO, request);
    }

    // 404 for everything else
    return jsonResponse(
      { error: "Not found", availableEndpoints: ["/api/site-info"] },
      request,
      404
    );
  },
} satisfies ExportedHandler<Env>;
