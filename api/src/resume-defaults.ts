/**
 * Default resume content — used as fallback when KV has no resume entries yet.
 * Once you add keys like `job1`, `cert1`, etc. to KV, those will override
 * the corresponding sections below.
 */

export interface ResumeJob {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ResumeCertificate {
  title: string;
  embedHtml?: string;
}

export interface ResumeEducation {
  title: string;
  subtitle: string;
  details: { label: string; value: string }[];
}

export interface ResumeLanguage {
  name: string;
  proficiency: string;
  speaking: number;
  writing: number;
}

export interface ResumeCaseStudy {
  title: string;
  description: string;
  tags: string[];
  status?: string;
}

export interface ResumeSkillGroup {
  category: string;
  skills: string[];
}

export interface ResumeContent {
  heroSubtitle: string;
  jobs: (ResumeJob & { id: string })[];
  certificates: (ResumeCertificate & { id: string })[];
  education: (ResumeEducation & { id: string })[];
  languages: (ResumeLanguage & { id: string })[];
  caseStudies: (ResumeCaseStudy & { id: string })[];
  skillGroups: (ResumeSkillGroup & { id: string })[];
}

export const DEFAULT_RESUME_CONTENT: ResumeContent = {
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
};
