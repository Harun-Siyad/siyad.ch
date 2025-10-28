export type SiteConfig = {
  ownerName: string;
  contactEmail: string;
  domain: string; // e.g. "sulej.ch"
  siteTitle: string; // e.g. "sulej.ch"
  githubRepo?: string; // optional repo URL
};

export const site: SiteConfig = {
  ownerName: "Harun Siyad",
  contactEmail: "harun@siyad.ch",
  domain: "siyad.ch",
  siteTitle: "siyad.ch",
  githubRepo: "https://github.com/Harun-Siyad/siyad.ch"
};

export const currentYear = new Date().getFullYear();
