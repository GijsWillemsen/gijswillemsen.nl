import { Github, Mail, Globe, FileText, Folder, User, Boxes, ArrowLeft } from "lucide-react";
import { WaveBand } from "./WaveBand";
import { Wordmark } from "./Wordmark";
import { useSiteInfo } from "@/hooks/useSiteInfo";
import { ImageWithFallback } from "./ImageWithFallback";
import imgSableLogo from "../../../../home/src/imports/home/34e1a05dacba882243b613622d41219303fb8cb9.png";
import imgWlmsnLogo from "../../../../home/src/imports/home/dd38095cc809e55f1fdd3091393db1050e65d719.png";

const FONT = "'Silkscreen', monospace";

export function HelloPage() {
  const { data: siteInfo } = useSiteInfo();
  return (
    <div className="min-h-screen w-full bg-[#181818] relative overflow-hidden flex flex-col selection:bg-white/20">

      <a 
        href={siteInfo.navigation.home} 
        className="fixed top-6 left-6 sm:top-10 sm:left-12 flex w-fit items-center gap-2 text-white/50 transition-colors hover:text-white z-50 bg-[#181818]/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
        style={{ fontFamily: FONT, fontSize: 14 }}
      >
        <ArrowLeft size={16} />
        Back to Home
      </a>

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
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 z-50">
        <div className="relative size-[41px] overflow-hidden">
          <ImageWithFallback alt="WLMSN logo" className="absolute inset-0 max-w-none object-cover size-full" src={imgWlmsnLogo} />
        </div>
        <div className="relative size-[47px] overflow-hidden">
          <ImageWithFallback alt="SABLE logo" className="absolute h-[160.47%] left-[-87.58%] max-w-none top-[-36.1%] w-[285.27%]" src={imgSableLogo} />
        </div>
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 left-4 font-['Silkscreen',sans-serif] text-[13px] text-white/30 hover:text-white whitespace-nowrap cursor-pointer transition-colors duration-300 focus:outline-none z-50"
        style={{ cursor: 'pointer' }}
      >
        {siteInfo.brand}
      </button>
    </div>
  );
}
