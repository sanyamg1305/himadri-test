export type ProjectCategory =
  | "all"
  | "campaign"
  | "social-strategy"
  | "writing"
  | "production"
  | "paid-project"
  | "personal";

export type LinkItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
  context: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  summary: string;
};

export type BookEntry = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  role: string;
  summary: string;
  contribution: string[];
  outcomes?: string[];
  tools?: string[];
  image: string;
  video?: string;
  hrefs?: LinkItem[];
  featured?: boolean;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};
