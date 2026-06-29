import { ArrowLeft, Box, Hammer, Globe, Cpu, Loader2, Pause, Coffee } from "lucide-react";
import { WaveBand } from "./WaveBand";
import { Wordmark } from "./Wordmark";
import { useSiteInfo } from "@/hooks/useSiteInfo";

const projects = [
  {
    title: "3D Printer Grip & Damper Feet",
    description: "Stabilizer and grip feet designed for 3D printers, available on MakerWorld.",
    link: "https://makerworld.com/en/models/1649541-3d-printer-stabilizer-and-grip-feet",
    icon: Box,
    status: "active"
  },
  {
    title: "3D Printer Bed Scraper",
    description: "A durable bed scraper to easily remove prints without damaging the surface.",
    link: "https://makerworld.com/en/models/1646029-bed-scraper",
    icon: Hammer,
    status: "active"
  },
  {
    title: "This Website",
    description: "A neuromorphic portfolio built with React, Tailwind, and Cloudflare Workers.",
    link: "https://gijswillemsen.nl",
    icon: Globe,
    status: "active"
  },
  {
    title: "Exoskeleton AI Project",
    description: "An advanced exoskeleton powered by AI. Currently on pause.",
    link: "https://ko-fi.com/C0C01DUUA1",
    icon: Cpu,
    status: "paused",
    linkText: "Support on Ko-fi",
    linkIcon: Coffee
  },
  {
    title: "More Projects Coming",
    description: "I'm always working on something new in engineering or development.",
    link: "#",
    icon: Loader2,
    status: "pending"
  }
];

export function ProjectsPage() {
  const { data: siteInfo } = useSiteInfo();

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col selection:bg-white/20 cursor-default">
      <a 
        href={siteInfo.navigation.home}
        className="fixed top-6 left-6 z-50 flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span className="font-['Fira_Code',monospace] text-sm">Return Home</span>
      </a>
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

      <main className="relative z-10 flex-grow flex flex-col items-center pt-24 pb-32 px-6">
        <div className="w-full max-w-5xl">
          <header className="mb-16 text-center">
            <Wordmark className="w-full max-w-[500px] mx-auto mb-6" />
            <p className="text-xl text-white/60 font-['Fira_Code',monospace] tracking-wider">
              @gijswillemsen
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-['Fira_Code',monospace]">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              const LinkIcon = project.linkIcon;
              
              if (project.status === "pending") {
                return (
                  <div key={idx} className="flex flex-col p-8 bg-white/5 border border-white/10 rounded-2xl md:col-span-2 items-center text-center">
                    <Loader2 className="w-8 h-8 text-white/40 animate-spin mb-4" />
                    <h2 className="text-xl text-white/70 font-medium mb-2">{project.title}</h2>
                    <p className="text-white/40">{project.description}</p>
                  </div>
                );
              }

              return (
                <a 
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-col p-8 bg-white/5 border rounded-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer ${
                    project.status === "paused" 
                      ? "border-orange-500/20 hover:border-orange-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]" 
                      : "border-white/10 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className={`p-4 rounded-xl ${project.status === 'paused' ? 'bg-orange-500/10' : 'bg-blue-500/10'} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 ${project.status === 'paused' ? 'text-orange-400' : 'text-blue-400'}`} />
                    </div>
                    {project.status === "paused" && (
                      <div className="flex items-center space-x-2 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                        <Pause className="w-3 h-3 text-orange-400" />
                        <span className="text-xs text-orange-400 font-medium uppercase tracking-wider">Paused</span>
                      </div>
                    )}
                  </div>

                  <h2 className="text-2xl text-white/90 font-medium mb-3 relative z-10 group-hover:text-white transition-colors">{project.title}</h2>
                  <p className="text-white/50 leading-relaxed mb-8 flex-grow relative z-10 group-hover:text-white/70 transition-colors">
                    {project.description}
                  </p>

                  <div className={`inline-flex items-center space-x-2 text-sm font-medium transition-colors relative z-10 ${
                    project.status === 'paused' ? 'text-orange-400/70 group-hover:text-orange-400' : 'text-blue-400/70 group-hover:text-blue-400'
                  }`}>
                    {LinkIcon ? <LinkIcon className="w-4 h-4" /> : null}
                    <span>{project.linkText || "View Project →"}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <WaveBand />
    </div>
  );
}
