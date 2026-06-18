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
    const origin = request.headers.get("Origin") ?? "";
    const isAllowed = 
      origin === "https://gijswillemsen.nl" || 
      origin.endsWith(".gijswillemsen.nl") ||
      origin === "http://localhost:5173" ||
      origin === "http://localhost:4173";

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
      // SECURITY: Block direct browser access or unauthorized sites
      if (!isAllowed) {
        return new Response("Forbidden: Invalid Origin", { status: 403 });
      }

      // Start with defaults
      const siteInfo = { ...DEFAULT_SITE_INFO };

      // Try to read from KV if the binding is configured
      if (env.KV) {
        try {
          const [
            country, uptime, language, mail,
            github_url, github_handle,
            makerworld_url, makerworld_handle,
            copyright_json,
            nav_resume, nav_projects
          ] = await Promise.all([
            env.KV.get("country"),
            env.KV.get("uptime"),
            env.KV.get("language"),
            env.KV.get("mail"),
            env.KV.get("github_url"),
            env.KV.get("github_handle"),
            env.KV.get("makerworld_url"),
            env.KV.get("makerworld_handle"),
            env.KV.get("copyright", "json"),
            env.KV.get("nav_resume"),
            env.KV.get("nav_projects")
          ]);

          // Deep copy defaults so we don't mutate the imported DEFAULT_SITE_INFO object structure directly
          const hero = { ...siteInfo.hero };
          if (country) hero.country = country;
          if (uptime) hero.uptime = uptime;
          if (language) hero.language = language;
          if (mail) hero.mail = mail;
          siteInfo.hero = hero;

          const links = {
            github: { ...siteInfo.links.github },
            makerworld: { ...siteInfo.links.makerworld }
          };
          if (github_url) links.github.url = github_url;
          if (github_handle) links.github.handle = github_handle;
          if (makerworld_url) links.makerworld.url = makerworld_url;
          if (makerworld_handle) links.makerworld.handle = makerworld_handle;
          siteInfo.links = links;

          if (mail) siteInfo.contact = { email: mail }; // use mail for contact email too

          if (copyright_json) siteInfo.copyright = copyright_json as string[];

          const navigation = { ...siteInfo.navigation };
          if (nav_resume) navigation.resume = nav_resume;
          if (nav_projects) navigation.projects = nav_projects;
          siteInfo.navigation = navigation;
          
        } catch (e) {
          console.error("Error reading from KV", e);
          // KV read failed — fall through to defaults for any missing parts
        }
      }

      return jsonResponse(siteInfo, request);
    }

    // 404 for everything else
    return jsonResponse(
      { error: "Not found", availableEndpoints: ["/api/site-info"] },
      request,
      404
    );
  },
} satisfies ExportedHandler<Env>;
