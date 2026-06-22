const FONT = "'Silkscreen', monospace";

export function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-10 w-fit">
      <h2
        className="text-white"
        style={{ fontFamily: FONT, fontSize: 36, lineHeight: 1.1 }}
      >
        {children}
      </h2>
      <div className="mt-3 h-[2px] w-full bg-white" />
    </div>
  );
}
