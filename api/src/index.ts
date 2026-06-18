import { DEFAULT_SITE_INFO } from "./defaults";

export interface Env {
  KV?: KVNamespace;
}

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("Origin") ?? "";
  
  // Allow gijswillemsen.nl and any of its subdomains (like home.gijswillemsen.nl), plus local dev
  const isAllowed = 
    origin === "https://gijswillemsen.nl" || 
    origin.endsWith(".gijswillemsen.nl") ||
    origin === "http://localhost:5173" ||
    origin === "http://localhost:4173";

  const allowedOrigin = isAllowed ? origin : "https://gijswillemsen.nl";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
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
      // Try to read from KV if the binding is configured
      if (env.KV) {
        try {
          const kvData = await env.KV.get("site-info", "json");

          if (kvData) {
            return jsonResponse(kvData, request);
          }
        } catch {
          // KV read failed — fall through to defaults
        }
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
