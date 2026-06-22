// ---------------------------------------------------------------------------
// Content model for the résumé homepage.
//
// All copy on the page is driven by this data structure so the content can be
// edited remotely. The intended backend is a Cloudflare Worker that stores this
// JSON in a KV namespace and serves it from `GET /api/content`. The frontend
// fetches that endpoint at runtime (see `fetchContent`) and falls back to the
// bundled `defaultContent` below if the Worker is unavailable (e.g. local dev).
//
// Example Worker handler (for reference — lives in your Worker, not here):
//
//   export default {
//     async fetch(req, env) {
//       const url = new URL(req.url);
//       if (url.pathname === "/api/content") {
//         if (req.method === "GET") {
//           const json = await env.RESUME_KV.get("content");
//           return new Response(json ?? JSON.stringify({}), {
//             headers: { "content-type": "application/json" },
//           });
//         }
//         if (req.method === "PUT") {
//           await env.RESUME_KV.put("content", await req.text());
//           return new Response("ok");
//         }
//       }
//       return env.ASSETS.fetch(req);
//     },
//   };
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  embedHtml?: string;
}

export interface EducationEntry {
  id: string;
  title: string;
  subtitle: string;
  details: { label: string; value: string }[];
}

export interface LanguageEntry {
  id: string;
  name: string;
  proficiency: string;
  speaking: number;
  writing: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: string[];
}

export interface ResumeContent {
  wordmark: string;
  heroSubtitle: string;
  jobs: Job[];
  certificates: Certificate[];
  education: EducationEntry[];
  languages: LanguageEntry[];
  caseStudies: CaseStudy[];
  skillGroups: SkillGroup[];
  footer: {
    pages: NavLink[];
    links: NavLink[];
    email: string;
    copyright: string[];
  };
}

export const defaultContent: ResumeContent = {
  wordmark: "RESUME",
  heroSubtitle:
    "Self-taught IT enthusiast building self-hosted infrastructure and full-stack applications.",
  jobs: [
    {
      id: "albert-heijn",
      title: "Operations",
      company: "ALBERT HEIJN",
      period: "june 2025 to present",
      description:
        "Optimized store inventory workflows and product presentation to ensure high availability and an efficient customer shopping experience.",
    },
  ],
  certificates: [
    {
      id: "credly",
      title: "Cisco Cybersecurity",
      embedHtml:
        '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="430708bb-a1c1-4428-bb54-97adbd1e4f39" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>',
    },
  ],
  education: [
    {
      id: "havo",
      title: "HAVO",
      subtitle: "Higher General Secondary Education (Netherlands)",
      details: [
        { label: "Current Academic Year", value: "2025 – 2026" },
        { label: "Location", value: "Netherlands" },
        { label: "Status", value: "Currently in 3th year" },
      ],
    },
  ],
  languages: [
    {
      id: "dutch",
      name: "DUTCH",
      proficiency: "Native proficiency",
      speaking: 5,
      writing: 5,
    },
    {
      id: "english",
      name: "ENGLISH",
      proficiency: "Conversational & Written Fluency",
      speaking: 4,
      writing: 3,
    },
  ],
  caseStudies: [
    {
      id: "ctf",
      title: "CTF's & Cybersecurity Training",
      description:
        "To gain hands-on cybersecurity experience, I regularly train on platforms like Hack The Box and TryHackMe. I have also used projects like OWASP Juice Shop to test and understand web vulnerabilities in practice.",
      tags: ["Hack The Box", "TryHackMe", "CTF", "Cybersecurity"],
    },
    {
      id: "homelab",
      title: "HomeLab & Self-Hosting",
      description:
        "I manage my own server infrastructure. I started with OpenMediaVault and have since migrated to TrueNAS. I self-host various services, including Home Assistant and a private GitHub environment for confidential projects (like project 'Sable'). I am planning a future migration to a Proxmox setup on a Threadripper system.",
      tags: ["TrueNAS", "Self-Hosting", "Home Assistant", "Proxmox"],
    },
    {
      id: "tor",
      title: "Tor Hidden Service (Experiment)",
      description:
        "As a networking and privacy experiment, I temporarily deployed my personal website as a hidden service on the Tor network (dark web). The project is currently offline, but served as a practical test for anonymous hosting and server configuration.",
      tags: ["Tor", "Networking", "Privacy"],
    },
    {
      id: "sable",
      title: "Sable Interface (Web & Android App)",
      status: "In Development",
      description:
        "I am currently building a custom web interface and a companion Android application for my private 'Sable' environment. This project serves as the graphical front-end for my self-hosted back-end infrastructure.",
      tags: ["Android", "React", "Frontend", "In Development"],
    },
  ],
  skillGroups: [
    {
      id: "frontend",
      category: "Frontend Development",
      skills: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Vite"],
    },
    {
      id: "backend",
      category: "Backend & Databases",
      skills: ["Node.js", "Python", "Java", "SQL & MySQL"],
    },
    {
      id: "mobile",
      category: "Mobile & Other",
      skills: ["Android App Development"],
    },
  ],
  footer: {
    pages: [
      { label: "Projects", href: "#projects" },
      { label: "Resume", href: "#resume" },
    ],
    links: [
      { label: "Github", href: "https://github.com" },
      { label: "Makerworld", href: "https://makerworld.com" },
    ],
    email: "mail@gijswillemsen.nl",
    copyright: ["© 2026 Gijs Willemsen", "© 2026 WLMSN", "© 2026 Sable"],
  },
};

export async function fetchContent(
  endpoint = "/api/content",
): Promise<ResumeContent> {
  try {
    const res = await fetch(endpoint, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`Content request failed: ${res.status}`);
    const data = (await res.json()) as Partial<ResumeContent>;
    return {
      ...defaultContent,
      ...data,
      footer: { ...defaultContent.footer, ...(data.footer ?? {}) },
    };
  } catch {
    return defaultContent;
  }
}
