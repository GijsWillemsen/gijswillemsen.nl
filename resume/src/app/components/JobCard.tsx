import type { Job } from "../lib/content";

const FONT = "'Silkscreen', monospace";

/** Little pixel "window control" squares in the card title bar. */
function WindowDots({ color }: { color: string }) {
  return (
    <div className="flex shrink-0 gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-2" style={{ background: color }} />
      ))}
    </div>
  );
}

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="flex h-full min-h-[209px] flex-col border-2 border-[#002BFF] bg-[#1c1c1c]">
      {/* title bar */}
      <div className="flex items-center justify-between gap-3 bg-[#002BFF] px-4 py-2.5">
        <p
          className="truncate text-white"
          style={{ fontFamily: FONT, fontSize: 20, lineHeight: 1.1 }}
        >
          {job.title}
        </p>
        <WindowDots color="rgba(255,255,255,0.85)" />
      </div>
      {/* body */}
      <div className="flex flex-1 flex-col gap-3 px-5 py-4">
        <p style={{ fontFamily: FONT, fontSize: 12, color: "#5b7cff" }}>
          {job.company} — {job.period}
        </p>
        <p
          className="text-white/70"
          style={{ fontFamily: FONT, fontSize: 12, lineHeight: 1.5 }}
        >
          {job.description}
        </p>
      </div>
    </div>
  );
}

/** Empty gray placeholder card that always sits at the end of the timeline. */
export function GhostCard() {
  return (
    <div className="flex h-full min-h-[209px] flex-col border-2 border-[#5a5c67] bg-[#1c1c1c]/40">
      <div className="flex items-center justify-between gap-3 bg-[#5a5c67] px-4 py-2.5">
        <p style={{ fontFamily: FONT, fontSize: 20, lineHeight: 1.1 }}>&nbsp;</p>
        <WindowDots color="rgba(28,28,28,0.55)" />
      </div>
      <div className="flex-1" />
    </div>
  );
}
