import { useSiteInfo } from "@/hooks/useSiteInfo";

interface FooterProps {
  onResume?: () => void;
  onProjects?: () => void;
}

export function Footer({ onResume, onProjects }: FooterProps) {
  const { data: siteInfo } = useSiteInfo();
  const handleResume = onResume ?? (() => { window.location.href = siteInfo.navigation.resume; });
  const handleProjects = onProjects ?? (() => { window.location.href = siteInfo.navigation.projects; });

  return (
    <footer className="w-full border-t border-white/10 px-12 py-10 font-['Silkscreen',sans-serif]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Pages</p>
            <button
              type="button"
              onClick={handleProjects}
              className="text-left text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={handleResume}
              className="text-left text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              Resume
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Links</p>
            <a
              href={siteInfo.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              Github
            </a>
            <a
              href={siteInfo.links.makerworld.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              Makerworld
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Contact</p>
            <a
              href={`mailto:${siteInfo.contact.email}`}
              className="text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
            >
              {siteInfo.contact.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-1">
          {siteInfo.copyright.map((line) => (
            <p key={line} className="text-[11px] text-white/30">{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
