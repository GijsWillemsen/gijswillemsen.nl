import { useEffect, useState } from "react";
import type { Job } from "../lib/content";
import { JobCard, GhostCard } from "./JobCard";

type Item = { kind: "job"; job: Job } | { kind: "ghost" };

/** Responsive column count: 3 on desktop, 2 on tablet, 1 on mobile. */
function useColumns() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setCols(w < 720 ? 1 : w < 1120 ? 2 : 3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return cols;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/**
 * Horizontal connector between two cards in the same row. Two parallel blue
 * lines that span the full gap so they touch the card on each side.
 */
function HConnector() {
  return (
    <div className="flex w-7 shrink-0 flex-col justify-center gap-1.5 self-center sm:w-14">
      <div className="h-[3px] bg-[#002bff]" />
      <div className="h-[3px] bg-[#002bff]" />
    </div>
  );
}

/**
 * Vertical drop connector linking the end of one row to the start of the next.
 * Two parallel blue lines spanning the full height so they touch the card above
 * and below. Positioned over the turning column with a percentage so it stays
 * aligned at any width. `side` is the side the snake turns on.
 */
function VConnector({ cols, side }: { cols: number; side: "left" | "right" }) {
  const leftPct =
    side === "right" ? ((cols - 0.5) / cols) * 100 : (0.5 / cols) * 100;
  return (
    <div className="relative h-10">
      <div
        className="absolute inset-y-0 flex -translate-x-1/2 gap-1.5"
        style={{ left: `${leftPct}%` }}
      >
        <div className="w-[3px] bg-[#002bff]" />
        <div className="w-[3px] bg-[#002bff]" />
      </div>
    </div>
  );
}

export function JobTimeline({ jobs }: { jobs: Job[] }) {
  const cols = useColumns();

  // Real jobs followed by a single "next slot" ghost card.
  const items: Item[] = [
    ...jobs.map((job) => ({ kind: "job" as const, job })),
    { kind: "ghost" as const },
  ];
  const rows = chunk(items, cols);

  return (
    <div className="flex flex-col">
      {rows.map((row, r) => {
        const reverse = r % 2 === 1; // snake: odd rows run right-to-left
        const isLastRow = r === rows.length - 1;
        const padCount = cols - row.length;
        
        const paddedRow = [...row, ...Array(padCount).fill(null)];
        const visualRow = reverse ? [...paddedRow].reverse() : paddedRow;

        return (
          <div key={r}>
            <div className="flex">
              {visualRow.map((item, i) => {
                const hasNext = !!visualRow[i + 1];
                return (
                  <div key={i} className="flex flex-1">
                    <div className="flex-1">
                      {item ? (
                        item.kind === "job" ? (
                          <JobCard job={item.job} />
                        ) : (
                          <GhostCard />
                        )
                      ) : null}
                    </div>
                    {/* Real connector if there's an item AND a next item.
                        Otherwise a spacer to ensure identical widths across all columns. */}
                    {item && hasNext ? (
                      <HConnector />
                    ) : (
                      <div className="w-7 shrink-0 sm:w-14" />
                    )}
                  </div>
                );
              })}
            </div>
            {!isLastRow && (
              <VConnector cols={cols} side={reverse ? "left" : "right"} />
            )}
          </div>
        );
      })}
    </div>
  );
}
