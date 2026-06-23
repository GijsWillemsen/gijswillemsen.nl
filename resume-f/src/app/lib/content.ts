// ---------------------------------------------------------------------------
// Content model for the résumé homepage.
//
// All copy on the page is driven by this data structure so the content can be
// edited remotely. The backend is a Cloudflare Worker that reads individual
// KV keys (job1, cert1, edu1, lang1, case1, skill1, hero_subtitle, etc.)
// and assembles them into this JSON shape via `GET /api/resume-content`.
// The frontend fetches that endpoint at runtime (see `fetchContent`) and
// falls back to the bundled `defaultContent` below if the Worker is
// unavailable (e.g. local dev without the Worker running).
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
      id: "job1",
      title: "Operations",
      company: "ALBERT HEIJN",
      period: "june 2025 to present",
      description:
        "Optimized store inventory workflows and product presentation to ensure high availability and an efficient customer shopping experience.",
    },
  ],
  certificates: [
    {
      id: "cert1",
      title: "Cisco Cybersecurity",
      embedHtml:
        '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="430708bb-a1c1-4428-bb54-97adbd1e4f39" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>',
    },
  ],
  education: [
    {
      id: "edu1",
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
      id: "lang1",
      name: "DUTCH",
      proficiency: "Native proficiency",
      speaking: 5,
      writing: 5,
    },
    {
      id: "lang2",
      name: "ENGLISH",
      proficiency: "Conversational & Written Fluency",
      speaking: 4,
      writing: 3,
    },
  ],
  caseStudies: [
    {
      id: "case1",
      title: "CTF's & Cybersecurity Training",
      description:
        "To gain hands-on cybersecurity experience, I regularly train on platforms like Hack The Box and TryHackMe. I have also used projects like OWASP Juice Shop to test and understand web vulnerabilities in practice.",
      tags: ["Hack The Box", "TryHackMe", "CTF", "Cybersecurity"],
    },
    {
      id: "case2",
      title: "HomeLab & Self-Hosting",
      description:
        "I manage my own server infrastructure. I started with OpenMediaVault and have since migrated to TrueNAS. I self-host various services, including Home Assistant and a private GitHub environment for confidential projects (like project 'Sable'). I am planning a future migration to a Proxmox setup on a Threadripper system.",
      tags: ["TrueNAS", "Self-Hosting", "Home Assistant", "Proxmox"],
    },
    {
      id: "case3",
      title: "Tor Hidden Service (Experiment)",
      description:
        "As a networking and privacy experiment, I temporarily deployed my personal website as a hidden service on the Tor network (dark web). The project is currently offline, but served as a practical test for anonymous hosting and server configuration.",
      tags: ["Tor", "Networking", "Privacy"],
    },
    {
      id: "case4",
      title: "Sable Interface (Web & Android App)",
      status: "In Development",
      description:
        "I am currently building a custom web interface and a companion Android application for my private 'Sable' environment. This project serves as the graphical front-end for my self-hosted back-end infrastructure.",
      tags: ["Android", "React", "Frontend", "In Development"],
    },
  ],
  skillGroups: [
    {
      id: "skill1",
      category: "Frontend Development",
      skills: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Vite"],
    },
    {
      id: "skill2",
      category: "Backend & Databases",
      skills: ["Node.js", "Python", "Java", "SQL & MySQL"],
    },
    {
      id: "skill3",
      category: "Mobile & Other",
      skills: ["Android App Development"],
    },
  ],
  footer: {
    pages: [
      { label: "Projects", href: "https://projects.gijswillemsen.nl/" },
      { label: "Resume", href: "https://resume.gijswillemsen.nl/" },
    ],
    links: [
      { label: "Github", href: "https://github.com/GijsWillemsen" },
      { label: "Makerworld", href: "https://makerworld.com/en/@Gijswillemsen" },
    ],
    email: "mail@gijswillemsen.nl",
    copyright: ["© 2026 Gijs Willemsen", "© 2026 WLMSN", "© 2026 Sable"],
  },
};

/**
 * The API base URL.
 * In production this points to the Cloudflare Worker.
 * During local dev, the Worker runs on port 8787.
 */
const API_BASE =
  import.meta.env.VITE_API_URL ??
  (import.meta.env.DEV
    ? "http://localhost:8787"
    : "https://web-api.gijswillemsen.nl");

export async function fetchContent(): Promise<ResumeContent> {
  try {
    const res = await fetch(`${API_BASE}/api/resume-content`, {
      headers: { Accept: "application/json" },
    });
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


