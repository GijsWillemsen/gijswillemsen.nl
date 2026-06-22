import type { Certificate } from "../lib/content";
import { CredlyBadge } from "./CredlyBadge";

const FONT = "'Silkscreen', monospace";

export function Certificates({ items }: { items: Certificate[] }) {
  return (
    <div className="relative flex flex-wrap gap-6">
      {items.map((cert) => (
        <div
          key={cert.id}
          className="min-h-[360px] w-full max-w-[435px] rounded-[25px] border border-[#868686] bg-[#181818] p-8"
        >
          <p
            className="mb-6 text-white"
            style={{ fontFamily: FONT, fontSize: 20 }}
          >
            {cert.title}
          </p>
          {cert.embedHtml ? <CredlyBadge embedHtml={cert.embedHtml} /> : null}
        </div>
      ))}
    </div>
  );
}
