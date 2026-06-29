/** Shape of the site-info API response. */
export interface SiteInfo {
  hero: {
    country: string;
    uptime: string;
    language: string;
    mail: string;
  };
  links: {
    github: { url: string; handle: string };
    makerworld: { url: string; handle: string };
  };
  contact: {
    email: string;
  };
  copyright: string[];
  navigation: {
    resume: string;
    projects: string;
    home: string;
    about: string;
  };
  brand: string;
}
