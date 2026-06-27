import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { defaultContent, fetchContent, type ResumeContent } from "../lib/content";
import { ImageWithFallback } from "./ImageWithFallback";
import imgSableLogo from "../../../../home/src/imports/home/34e1a05dacba882243b613622d41219303fb8cb9.png";
import imgWlmsnLogo from "../../../../home/src/imports/home/dd38095cc809e55f1fdd3091393db1050e65d719.png";
import { useSiteInfo } from "@/hooks/useSiteInfo";
import { Wordmark } from "./Wordmark";
import { JobTimeline } from "./JobTimeline";
import { Certificates } from "./Certificates";
import { Education } from "./Education";
import { Languages } from "./Languages";
import { CaseStudies } from "./CaseStudies";
import { TechnicalSkills } from "./TechnicalSkills";
import { WaveBand } from "./WaveBand";
import { SiteFooter } from "./SiteFooter";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const FONT = "'Silkscreen', monospace";

export function ResumePage() {
  const [content, setContent] = useState<ResumeContent>(defaultContent);
  const { data: siteInfo } = useSiteInfo();

  useEffect(() => {
    let active = true;
    fetchContent().then((c) => { if (active) setContent(c); });
    return () => { active = false; };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#181818]">
      <div className="mx-auto max-w-[1500px] px-6 pt-10 sm:px-12 sm:pt-20">
        <a 
          href={siteInfo.navigation.home} 
          className="mb-8 flex w-fit items-center gap-2 text-white/50 transition-colors hover:text-white"
          style={{ fontFamily: FONT, fontSize: 14 }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>

        {/* ── Hero ── */}
        <header className="mb-24">
          <Wordmark />
          <p
            className="mt-6 text-center text-white/60"
            style={{ fontFamily: FONT, fontSize: 14, lineHeight: 1.6 }}
          >
            {content.heroSubtitle}
          </p>
        </header>

        <Tabs defaultValue="jobs" className="mb-28 w-full">
          <TabsList className="mb-12 flex w-full flex-wrap justify-center gap-2 bg-transparent p-0">
            <TabsTrigger value="jobs" style={{ fontFamily: FONT }} className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 border border-white/10 rounded-full px-4 py-2">Jobs</TabsTrigger>
            <TabsTrigger value="certificates" style={{ fontFamily: FONT }} className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 border border-white/10 rounded-full px-4 py-2">Certificates</TabsTrigger>
            <TabsTrigger value="education" style={{ fontFamily: FONT }} className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 border border-white/10 rounded-full px-4 py-2">Education</TabsTrigger>
            <TabsTrigger value="languages" style={{ fontFamily: FONT }} className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 border border-white/10 rounded-full px-4 py-2">Languages</TabsTrigger>
            <TabsTrigger value="case-studies" style={{ fontFamily: FONT }} className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 border border-white/10 rounded-full px-4 py-2">Case Studies</TabsTrigger>
            <TabsTrigger value="skills" style={{ fontFamily: FONT }} className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 border border-white/10 rounded-full px-4 py-2">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs">
            <JobTimeline jobs={content.jobs} />
          </TabsContent>

          <TabsContent value="certificates">
            <Certificates items={content.certificates} />
          </TabsContent>

          <TabsContent value="education">
            <Education items={content.education} />
          </TabsContent>

          <TabsContent value="languages">
            <Languages items={content.languages} />
          </TabsContent>

          <TabsContent value="case-studies">
            <CaseStudies items={content.caseStudies} />
          </TabsContent>

          <TabsContent value="skills">
            <TechnicalSkills groups={content.skillGroups} />
          </TabsContent>
        </Tabs>

      </div>

      <WaveBand />
      <SiteFooter />
      <div className="fixed bottom-4 right-4 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity duration-300 z-50">
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
        className="fixed bottom-4 left-4 font-['Silkscreen',sans-serif] text-[13px] text-[#f2f1f0] opacity-30 whitespace-nowrap cursor-pointer hover:opacity-60 transition-opacity duration-300 focus:outline-none z-50"
      >
        {siteInfo.brand}
      </button>
    </div>
  );
}
