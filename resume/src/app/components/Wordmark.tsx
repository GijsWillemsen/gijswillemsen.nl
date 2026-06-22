/** Large text-based "RESUME" wordmark. */
export function Wordmark() {
  return (
    <div className="mx-auto w-full max-w-[760px] text-center pt-10">
      <h1
        className="text-white tracking-widest uppercase font-bold"
        style={{
          fontFamily: "'Silkscreen', monospace",
          fontSize: "clamp(3rem, 10vw, 8rem)",
          lineHeight: 1,
          textShadow: "0px 4px 20px rgba(0, 43, 255, 0.8)",
        }}
      >
        RESUME
      </h1>
    </div>
  );
}
