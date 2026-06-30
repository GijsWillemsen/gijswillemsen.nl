import { useSiteInfo } from "@/hooks/useSiteInfo";

interface FooterProps {
  onHome?: () => void;
  onResume?: () => void;
  onProjects?: () => void;
}

export function Footer({ onHome, onResume, onProjects }: FooterProps) {
  const { data: siteInfo } = useSiteInfo();
  const handleHome = onHome ?? (() => { window.location.href = siteInfo.navigation.home; });
  const handleResume = onResume ?? (() => { window.location.href = siteInfo.navigation.resume; });
  const handleProjects = onProjects ?? (() => { window.location.href = siteInfo.navigation.projects; });
  const handleAbout = () => { window.location.href = siteInfo.navigation.about; };

  return (
    <footer className="w-full bg-[#001166] border-t border-white/10 px-6 sm:px-12 py-10 font-['Silkscreen',sans-serif]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Pages</p>
            <button
              type="button"
              onClick={handleHome}
              className="text-left text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
              style={{ cursor: 'pointer' }}
            >
              Home
            </button>
            <button
              type="button"
              onClick={handleProjects}
              className="text-left text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
              style={{ cursor: 'pointer' }}
            >
              Projects
            </button>
            <button
              type="button"
              onClick={handleResume}
              className="text-left text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
              style={{ cursor: 'pointer' }}
            >
              Resume
            </button>
            <button
              type="button"
              onClick={handleAbout}
              className="text-left text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
              style={{ cursor: 'pointer' }}
            >
              About Me
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Links</p>
            <a
              href={siteInfo.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
              style={{ cursor: 'pointer' }}
            >
              Github
            </a>
            <a
              href={siteInfo.links.makerworld.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
              style={{ cursor: 'pointer' }}
            >
              Makerworld
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-bold text-white/40 tracking-widest uppercase">Contact</p>
            <a
              href={`mailto:${siteInfo.contact.email}`}
              className="text-[14px] text-white/80 hover:text-white transition-colors duration-200 w-fit"
              style={{ cursor: 'pointer' }}
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
