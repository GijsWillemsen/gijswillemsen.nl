import type { LanguageEntry } from "../lib/content";

const FONT = "'Silkscreen', monospace";

function ProficiencyBar({ speaking, writing }: { speaking: number; writing: number }) {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-white/50 w-16" style={{ fontFamily: FONT }}>SPEAKING</span>
        <div className="flex gap-1 flex-1 h-[8px]">
          {[1, 2, 3, 4, 5].map((level) => (
            <div key={`s-${level}`} className={`flex-1 ${level <= speaking ? 'bg-[#002BFF]' : 'bg-white/10'}`} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-white/50 w-16" style={{ fontFamily: FONT }}>WRITING</span>
        <div className="flex gap-1 flex-1 h-[8px]">
          {[1, 2, 3, 4, 5].map((level) => (
            <div key={`w-${level}`} className={`flex-1 ${level <= writing ? 'bg-[#002BFF]' : 'bg-white/10'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LanguageIcon() {
  return (
    <div className="h-[60px] w-[60px] shrink-0 bg-[#002BFF] rounded-full flex items-center justify-center">
      <span className="text-white text-2xl" style={{ fontFamily: FONT }}>A</span>
    </div>
  );
}

export function Languages({ items }: { items: LanguageEntry[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {items.map((lang) => (
        <div
          key={lang.id}
          className="flex items-start justify-between gap-6 rounded-[25px] border border-[#868686] bg-[#181818] p-8"
        >
          <div className="min-w-0 flex-1">
            <p className="text-white" style={{ fontFamily: FONT, fontSize: 28 }}>
              {lang.name}
            </p>
            <p
              className="mt-2 text-[#868686]"
              style={{ fontFamily: FONT, fontSize: 18 }}
            >
              {lang.proficiency}
            </p>
            <ProficiencyBar speaking={lang.speaking} writing={lang.writing} />
          </div>
          <LanguageIcon />
        </div>
      ))}
    </div>
  );
}
