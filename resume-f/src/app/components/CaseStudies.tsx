import type { CaseStudy } from "../lib/content";

const FONT = "'Silkscreen', monospace";

function WindowDots() {
  return (
    <div className="flex shrink-0 gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-2 bg-white/80" />
      ))}
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: FONT,
        fontSize: 11,
        color: "#002BFF",
        background: "rgba(0,43,255,0.10)",
        padding: "2px 8px",
        border: "1px solid rgba(0,43,255,0.35)",
      }}
    >
      {label}
    </span>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="flex h-full flex-col border-2 border-[#002BFF] bg-[#1c1c1c]">
      <div className="flex items-center justify-between gap-3 bg-[#002BFF] px-4 py-2.5">
        <p
          className="truncate text-white"
          style={{ fontFamily: FONT, fontSize: 16, lineHeight: 1.1 }}
        >
          {study.title}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          {study.status && (
            <span
              className="bg-white/20 px-2 py-0.5 text-white"
              style={{ fontFamily: FONT, fontSize: 10 }}
            >
              {study.status}
            </span>
          )}
          <WindowDots />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5 px-5 py-4">
        <p
          className="text-white/70"
          style={{ fontFamily: FONT, fontSize: 12, lineHeight: 1.7 }}
        >
          {study.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudies({ items }: { items: CaseStudy[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {items.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
}
