import type { SiteInfo } from "./data";

/**
 * Default site content — used as fallback when KV has no data yet.
 * To update content, use the Cloudflare dashboard (Workers & Pages > KV)
 * or the wrangler CLI:
 *   npx wrangler kv:key put --binding SITE_CONTENT "site-info" '{ ... }'
 */
export const DEFAULT_SITE_INFO: SiteInfo = {
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
