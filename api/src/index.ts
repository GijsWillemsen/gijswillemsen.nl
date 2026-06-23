import { DEFAULT_SITE_INFO } from "./defaults";
import {
  DEFAULT_RESUME_CONTENT,
  type ResumeContent,
  type ResumeJob,
  type ResumeCertificate,
  type ResumeEducation,
  type ResumeLanguage,
  type ResumeCaseStudy,
  type ResumeSkillGroup,
} from "./resume-defaults";

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

/**
 * Extract the numeric suffix from a key name (e.g., "job12" → 12).
 * Returns Infinity for keys without a numeric suffix so they sort last.
 */
function numericSuffix(key: string): number {
  const match = key.match(/(\d+)$/);
  return match ? parseInt(match[1], 10) : Infinity;
}

/**
 * Given a KV namespace and a prefix, list all keys matching `prefix\d+`,
 * fetch their JSON values in parallel, and return them sorted by numeric suffix.
 * Each item gets an `id` field set to its key name.
 */
async function fetchPrefixedItems<T>(
  kv: KVNamespace,
  prefix: string,
): Promise<(T & { id: string })[]> {
  const listed = await kv.list({ prefix });
  // Filter to only keys matching the exact pattern: prefix followed by digits
  const pattern = new RegExp(`^${prefix}\\d+$`);
  const matchedKeys = listed.keys
    .filter((k) => pattern.test(k.name))
    .sort((a, b) => numericSuffix(a.name) - numericSuffix(b.name));

  if (matchedKeys.length === 0) return [];

  const values = await Promise.all(
    matchedKeys.map(async (k) => {
      const val = await kv.get<T>(k.name, "json");
      return val ? { ...val, id: k.name } : null;
    }),
  );

  // Filter out nulls (keys that didn't parse correctly)
  return values.filter((v) => v !== null) as (T & { id: string })[];
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
            nav_resume, nav_projects, nav_home,
            brand
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
            env.KV.get("nav_projects"),
            env.KV.get("nav_home"),
            env.KV.get("brand")
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
          if (nav_home) navigation.home = nav_home;
          siteInfo.navigation = navigation;
          
          if (brand) siteInfo.brand = brand;
          
        } catch (e) {
          console.error("Error reading from KV", e);
          // KV read failed — fall through to defaults for any missing parts
        }
      }

      return jsonResponse(siteInfo, request);
    }

    // GET /api/resume-content — resume page content
    if (url.pathname === "/api/resume-content" && request.method === "GET") {
      // SECURITY: Block direct browser access or unauthorized sites
      if (!isAllowed) {
        return new Response("Forbidden: Invalid Origin", { status: 403 });
      }

      // Start with defaults
      const content: ResumeContent = { ...DEFAULT_RESUME_CONTENT };

      // Try to read from KV if the binding is configured
      if (env.KV) {
        try {
          // Fetch all sections in parallel
          const [jobs, certificates, education, languages, caseStudies, skillGroups, heroSubtitle] =
            await Promise.all([
              fetchPrefixedItems<ResumeJob>(env.KV, "job"),
              fetchPrefixedItems<ResumeCertificate>(env.KV, "cert"),
              fetchPrefixedItems<ResumeEducation>(env.KV, "edu"),
              fetchPrefixedItems<ResumeLanguage>(env.KV, "lang"),
              fetchPrefixedItems<ResumeCaseStudy>(env.KV, "case"),
              fetchPrefixedItems<ResumeSkillGroup>(env.KV, "skill"),
              env.KV.get("hero_subtitle"),
            ]);

          // Override sections only if KV had entries for them
          if (jobs.length > 0) content.jobs = jobs;
          if (certificates.length > 0) content.certificates = certificates;
          if (education.length > 0) content.education = education;
          if (languages.length > 0) content.languages = languages;
          if (caseStudies.length > 0) content.caseStudies = caseStudies;
          if (skillGroups.length > 0) content.skillGroups = skillGroups;
          if (heroSubtitle) content.heroSubtitle = heroSubtitle;
        } catch (e) {
          console.error("Error reading resume content from KV", e);
          // KV read failed — fall through to defaults
        }
      }

      return jsonResponse(content, request);
    }

    // 404 for everything else
    return jsonResponse(
      { error: "Not found", availableEndpoints: ["/api/site-info", "/api/resume-content"] },
      request,
      404
    );
  },
} satisfies ExportedHandler<Env>;
