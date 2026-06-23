import { useEffect, useState } from "react";
import { defaultContent, fetchContent, type ResumeContent } from "../lib/content";
import { Wordmark } from "./Wordmark";
import { SectionHeading } from "./SectionHeading";
import { JobTimeline } from "./JobTimeline";
import { Certificates } from "./Certificates";
import { Education } from "./Education";
import { Languages } from "./Languages";
import { CaseStudies } from "./CaseStudies";
import { TechnicalSkills } from "./TechnicalSkills";
import { WaveBand } from "./WaveBand";
import { SiteFooter } from "./SiteFooter";

const FONT = "'Silkscreen', monospace";

export function ResumePage() {
  const [content, setContent] = useState<ResumeContent>(defaultContent);

  useEffect(() => {
    let active = true;
    fetchContent().then((c) => { if (active) setContent(c); });
    return () => { active = false; };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#181818]">
      <div className="mx-auto max-w-[1500px] px-6 pt-20 sm:px-12">

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

        {/* ── Job Timeline ── */}
        <section className="mb-28" id="resume">
          <SectionHeading>Job-Timeline</SectionHeading>
          <JobTimeline jobs={content.jobs} />
        </section>

        {/* ── Certificates ── */}
        <section className="mb-28">
          <SectionHeading>Certificates</SectionHeading>
          <Certificates items={content.certificates} />
        </section>

        {/* ── Education ── */}
        <section className="mb-28">
          <SectionHeading>Education</SectionHeading>
          <Education items={content.education} />
        </section>

        {/* ── Languages ── */}
        <section className="mb-28">
          <SectionHeading>Languages</SectionHeading>
          <Languages items={content.languages} />
        </section>

        {/* ── Case Studies ── */}
        <section className="mb-28" id="projects">
          <SectionHeading>Case Studies</SectionHeading>
          <CaseStudies items={content.caseStudies} />
        </section>

        {/* ── Technical Skills ── */}
        <section className="mb-28">
          <SectionHeading>Technical Skills</SectionHeading>
          <TechnicalSkills groups={content.skillGroups} />
        </section>

      </div>

      <WaveBand />
      <SiteFooter />
    </div>
  );
}
