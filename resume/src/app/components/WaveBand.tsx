/**
 * Layered blue band graphic.
 */
export function WaveBand() {
  return (
    <div className="w-full flex flex-col mt-20">
      <div className="h-[40px] w-full bg-[#001788] opacity-50" />
      <div className="h-[60px] w-full bg-[#002BFF] opacity-80" />
      <div className="h-[100px] w-full bg-[#000C46]" />
    </div>
  );
}
