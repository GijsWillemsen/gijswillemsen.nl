import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { defaultContent, fetchContent, type ResumeContent } from "../lib/content";
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
    </div>
  );
}
