import { Move3d, Globe, Cpu, Loader, Pause, ArrowLeft } from "lucide-react";
import { WaveBand } from "./WaveBand";
import { Wordmark } from "./Wordmark";
import { Footer as SiteFooter } from "./footer";
import { ImageWithFallback } from "./ImageWithFallback";
import { useSiteInfo } from "@/hooks/useSiteInfo";

import imgSableLogo from "../../../../home/src/imports/home/34e1a05dacba882243b613622d41219303fb8cb9.png";
import imgWlmsnLogo from "../../../../home/src/imports/home/dd38095cc809e55f1fdd3091393db1050e65d719.png";

const FONT = "'Silkscreen', monospace";

export function ProjectsPage() {
  const { data: siteInfo } = useSiteInfo();

  return (
    <div className="min-h-screen w-full bg-[#181818] relative overflow-hidden flex flex-col selection:bg-white/20">

      <main className="relative z-10 flex-grow flex flex-col items-center pt-10 sm:pt-20 pb-32 px-6">
        <div className="w-full max-w-[1500px]">
          <a 
            href={siteInfo.navigation.home} 
            className="fixed top-6 left-6 sm:top-10 sm:left-12 flex w-fit items-center gap-2 text-white/50 transition-colors hover:text-white z-50 bg-[#181818]/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
            style={{ fontFamily: FONT, fontSize: 14 }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>

          <div className="w-full max-w-4xl mx-auto">
            <header className="mb-24 text-center">
              <Wordmark />
            </header>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              {/* Project 1 */}
              <a 
                href="https://makerworld.com/en/models/1649541-3d-printer-stabilizer-and-grip-feet" 
                target="_blank" 
                rel="noreferrer"
                className="flex flex-col justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Move3d className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">3D Printer Grip & Damper Feet</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    Shock absorbing feet designed to reduce vibration, add grip, and improve print stability. Helps minimize noise and movement during prints. Easy to print and install. Small upgrade, big impact.
                  </p>
                </div>
              </a>

              {/* Project 2 */}
              <a 
                href="https://makerworld.com/en/models/1646029-bed-scraper" 
                target="_blank" 
                rel="noreferrer"
                className="flex flex-col justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Move3d className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">3D Printer Bed Scraper</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    A compact and practical 3D printed scraper designed for easy blade swapping. Helps remove prints cleanly without damaging the bed. Print once, reuse often.
                  </p>
                </div>
              </a>

              {/* Project 3 */}
              <a 
                href={siteInfo.navigation.home}
                className="flex flex-col justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors">This Website</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    My personal site showcasing 3D printing projects, CTF challenges and my resume. A space where I share what I’ve built, solved, and learned along the way.
                  </p>
                </div>
              </a>

              {/* Project 4 - Paused */}
              <div className="flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl relative opacity-85 hover:opacity-100 transition-opacity">
                <Pause className="absolute top-6 right-6 w-5 h-5 text-white/40" />
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-white/90">Exoskeleton AI Project</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6">
                    A compact, AI-integrated exoskeleton featuring smart battery monitoring, offline assistant capabilities, and real-time voice control. Support development and innovation in wearable robotics!
                  </p>
                  <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <a 
                      href="https://ko-fi.com/C0C01DUUA1"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-[#72a4f2]/20 text-[#72a4f2] hover:bg-[#72a4f2]/30 border border-[#72a4f2]/50 rounded-lg transition-colors font-semibold shadow-[0_0_15px_rgba(114,164,242,0.15)]"
                    >
                      Support me on Ko-fi
                    </a>
                    <span className="text-sm text-white/40 italic font-['Fira_Code',monospace]">this project is paused at the moment</span>
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl md:col-span-2 text-center">
                <div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Loader className="w-6 h-6 text-blue-500 animate-[spin_3s_linear_infinite]" />
                    <h3 className="text-xl font-bold text-white/90">More Projects Coming</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
                    This is just the beginning—I'm working on even more cool projects that will be available soon. Stay tuned for fresh drops and exciting updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WaveBand />
      <SiteFooter />
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
