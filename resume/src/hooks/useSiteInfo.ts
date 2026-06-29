import { useState, useEffect } from "react";
import type { SiteInfo } from "@/types/site-info";

/**
 * Default site data — used as fallback when the API is unreachable.
 * This ensures the page always renders, even without the Worker.
 */
const DEFAULTS: SiteInfo = {
  hero: {
    country: "Netherlands",
    uptime: "15 years",
    language: "NL / EN",
    mail: "mail@gijswillemsen.nl",
  },
  links: {
    github: {
      url: "https://github.com/GijsWillemsen",
      handle: "@gijswillemsen",
    },
    makerworld: {
      url: "https://makerworld.com/en/@Gijswillemsen",
      handle: "@gijswillemsen",
    },
  },
  contact: {
    email: "mail@gijswillemsen.nl",
  },
  copyright: [
    "© 2026 Gijs Willemsen",
    "© 2026 WLMSN",
    "© 2026 Sable",
  ],
  navigation: {
    resume: "https://resume.gijswillemsen.nl",
    projects: "https://projects.gijswillemsen.nl",
    home: "https://gijswillemsen.nl",
    about: "https://about.gijswillemsen.nl",
  },
  brand: "\\\\gijs willemsen \\\\WLMSN \\\\SABLE",
};

/** In-memory cache so we don't refetch on every route change. */
let cache: SiteInfo | null = null;

/**
 * The API base URL.
 * In production this should point to your Cloudflare Worker domain.
 * During local dev, the Worker runs on port 8787.
 */
const API_BASE =
  import.meta.env.VITE_API_URL ??
  (import.meta.env.DEV
    ? "http://localhost:8787"
    : "https://web-api.gijswillemsen.nl");

export function useSiteInfo() {
  const [data, setData] = useState<SiteInfo>(cache ?? DEFAULTS);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Already cached — skip fetch
    if (cache) return;

    let cancelled = false;

    async function fetchSiteInfo() {
      try {
        const res = await fetch(`${API_BASE}/api/site-info`);
        if (!res.ok) throw new Error(`API responded with ${res.status}`);

        const json: SiteInfo = await res.json();

        if (!cancelled) {
          cache = json;
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn("[useSiteInfo] API fetch failed, using defaults:", err);
          setError(err instanceof Error ? err.message : "Unknown error");
          setLoading(false);
          // Keep showing DEFAULTS — no blank page
        }
      }
    }

    fetchSiteInfo();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
