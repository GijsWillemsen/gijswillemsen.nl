import { Github, Mail, Globe, FileText, Folder, User, Boxes } from "lucide-react";
import { WaveBand } from "./WaveBand";
import { Wordmark } from "./Wordmark";
import { useSiteInfo } from "@/hooks/useSiteInfo";

export function HelloPage() {
  const siteInfo = useSiteInfo();

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col selection:bg-white/20">
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

      <main className="relative z-10 flex-grow flex flex-col items-center pt-24 pb-32 px-6">
        <div className="w-full max-w-lg">
          <header className="mb-12 text-center">
            <Wordmark className="w-full max-w-[400px] mx-auto mb-6" />
            <p className="text-xl text-white/60 font-['Fira_Code',monospace] tracking-wider">
              @gijswillemsen
            </p>
          </header>

          <div className="space-y-4 font-['Fira_Code',monospace]">
            {/* Socials */}
            <a 
              href={siteInfo.links.github.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <Github className="w-6 h-6 text-white/70 group-hover:text-white transition-colors mr-4" />
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">GitHub</span>
            </a>

            <a 
              href={siteInfo.links.makerworld.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <Boxes className="w-6 h-6 text-white/70 group-hover:text-white transition-colors mr-4" />
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">MakerWorld</span>
            </a>

            <a 
              href={`mailto:${siteInfo.contact.email}`}
              className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <Mail className="w-6 h-6 text-white/70 group-hover:text-white transition-colors mr-4" />
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">Email Me</span>
            </a>

            <div className="h-px bg-white/10 my-8"></div>

            {/* Pages */}
            <a 
              href={siteInfo.navigation.home}
              className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <Globe className="w-6 h-6 text-white/70 group-hover:text-white transition-colors mr-4" />
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">Home</span>
            </a>

            <a 
              href={siteInfo.navigation.about}
              className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <User className="w-6 h-6 text-white/70 group-hover:text-white transition-colors mr-4" />
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">About Me</span>
            </a>

            <a 
              href={siteInfo.navigation.resume}
              className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <FileText className="w-6 h-6 text-white/70 group-hover:text-white transition-colors mr-4" />
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">Resume</span>
            </a>

            <a 
              href={siteInfo.navigation.projects}
              className="flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <Folder className="w-6 h-6 text-white/70 group-hover:text-white transition-colors mr-4" />
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">Projects</span>
            </a>
          </div>
        </div>
      </main>

      <WaveBand />
    </div>
  );
}
