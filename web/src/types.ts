export type SocialPlatform = 'instagram' | 'threads' | 'tumblr' | 'other';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface ImageWithAlt {
  url: string;
  alt: string;
}

export interface ImageWithAltAndCaption extends ImageWithAlt {
  caption?: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  defaultOgImage: ImageWithAlt;
  email?: string;
  socialLinks: SocialLink[];
}

export interface CareerItem {
  year: string;
  text: string;
}

export interface Profile {
  name: string;
  title: string;
  photo?: ImageWithAlt;
  bio: string;
  skills?: string[];
  career?: CareerItem[];
}

export interface SeoMeta {
  title?: string;
  description?: string;
  ogImage?: ImageWithAlt;
}

export interface InformationPost {
  title: string;
  slug: string;
  publishedAt: string;
  body: string;
}

export interface Work {
  title: string;
  slug: string;
  publishedAt: string;
  thumbnail: ImageWithAlt;
  summary: string;
  body?: string;
  images?: ImageWithAltAndCaption[];
  externalUrl?: string;
  seo?: SeoMeta;
}
