import svgPaths from "../../imports/Resume/svg-j8xt1btrdk";
import type { LanguageEntry } from "../lib/content";

const FONT = "'Silkscreen', monospace";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      className="block h-4 w-4"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 20 19"
    >
      <path
        d={svgPaths.p1b500f0}
        fill={filled ? "white" : "none"}
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

function StarRating({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <p className="text-white" style={{ fontFamily: FONT, fontSize: 14 }}>
        {label}:
      </p>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < value} />
        ))}
      </div>
    </div>
  );
}

function LanguageIcon() {
  return (
    <div className="h-[110px] w-[110px] shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 152.001 152.001"
      >
        <path
          d={svgPaths.p30385b80}
          stroke="#002BFF"
          strokeLinecap="round"
          strokeWidth={10}
        />
      </svg>
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
          <div className="min-w-0">
            <p className="text-white" style={{ fontFamily: FONT, fontSize: 28 }}>
              {lang.name}
            </p>
            <p
              className="mt-2 text-[#868686]"
              style={{ fontFamily: FONT, fontSize: 18 }}
            >
              {lang.proficiency}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <StarRating label="SPEAKING" value={lang.speaking} />
              <StarRating label="WRITING" value={lang.writing} />
            </div>
          </div>
          <LanguageIcon />
        </div>
      ))}
    </div>
  );
}
