import svgPaths from "../../imports/Resume/svg-j8xt1btrdk";
import type { EducationEntry } from "../lib/content";

const FONT = "'Silkscreen', monospace";

function GradCap() {
  return (
    <div className="h-[80px] w-[120px] shrink-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 152.029 109"
      >
        <path
          d={svgPaths.p34380580}
          stroke="#002BFF"
          strokeLinecap="round"
          strokeWidth={10}
        />
      </svg>
    </div>
  );
}

export function Education({ items }: { items: EducationEntry[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((edu) => (
        <div
          key={edu.id}
          className="flex items-start justify-between gap-6 rounded-[25px] border border-[#868686] bg-[#181818] p-8"
        >
          <div className="min-w-0">
            <p
              className="text-white"
              style={{ fontFamily: FONT, fontSize: 28 }}
            >
              {edu.title}
            </p>
            <p
              className="mt-2 text-[#868686]"
              style={{ fontFamily: FONT, fontSize: 18 }}
            >
              {edu.subtitle}
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {edu.details.map((d) => (
                <p
                  key={d.label}
                  className="text-white"
                  style={{ fontFamily: FONT, fontSize: 14 }}
                >
                  {d.label}:{" "}
                  <span style={{ color: "#002BFF" }}>{d.value}</span>
                </p>
              ))}
            </div>
          </div>
          <GradCap />
        </div>
      ))}
    </div>
  );
}
