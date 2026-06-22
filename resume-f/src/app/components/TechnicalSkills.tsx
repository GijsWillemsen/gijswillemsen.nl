import type { SkillGroup } from "../lib/content";

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

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="flex flex-col border-2 border-[#002BFF] bg-[#1c1c1c]">
      <div className="flex items-center justify-between gap-3 bg-[#002BFF] px-4 py-2.5">
        <p
          className="truncate text-white"
          style={{ fontFamily: FONT, fontSize: 16, lineHeight: 1.1 }}
        >
          {group.category}
        </p>
        <WindowDots />
      </div>
      <div className="flex flex-col gap-2.5 px-5 py-4">
        {group.skills.map((skill) => (
          <div key={skill} className="flex items-center gap-3">
            <span className="size-1.5 shrink-0 bg-[#002BFF]" />
            <p
              className="text-white/70"
              style={{ fontFamily: FONT, fontSize: 12 }}
            >
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechnicalSkills({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <SkillGroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}
