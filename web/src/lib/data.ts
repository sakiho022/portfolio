import type { SiteSettings, Profile, Work, InformationPost, FavoriteItem } from '../types';
import { sanityClient } from './sanity';
import { mockSiteSettings, mockProfile, mockWorks, mockInformationPosts, mockFavorites } from '../mock';

const img = `{ "url": asset->url, alt }`;
const imgCaption = `{ "url": asset->url, alt, caption }`;

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await sanityClient.fetch(`
    *[_type == "siteSettings"][0] {
      siteTitle, siteDescription,
      "defaultOgImage": defaultOgImage ${img},
      email,
      socialLinks[] { platform, url }
    }
  `);
  return data ?? mockSiteSettings;
}

export async function getProfile(): Promise<Profile> {
  const data = await sanityClient.fetch(`
    *[_type == "profile"][0] {
      name, title,
      "photo": photo ${img},
      bio, skills,
      career[] { year, text }
    }
  `);
  return data ?? mockProfile;
}

export async function getWorks(): Promise<Work[]> {
  const data: Work[] | null = await sanityClient.fetch(`
    *[_type == "work" && defined(slug) && defined(thumbnail)] | order(publishedAt desc) {
      title, "slug": slug, publishedAt,
      "thumbnail": thumbnail ${img},
      summary, body,
      "images": images[] ${imgCaption},
      externalUrl
    }
  `);
  if (data && data.length > 0) return data;
  return [...mockWorks].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getWorkBySlug(slug: string): Promise<Work | undefined> {
  const data = await sanityClient.fetch(`
    *[_type == "work" && slug == $slug][0] {
      title, "slug": slug, publishedAt,
      "thumbnail": thumbnail ${img},
      summary, body,
      "images": images[] ${imgCaption},
      externalUrl
    }
  `, { slug });
  if (data) return data;
  const works = await getWorks();
  return works.find((w) => w.slug === slug);
}

export async function getInformationPosts(): Promise<InformationPost[]> {
  const data: InformationPost[] | null = await sanityClient.fetch(`
    *[_type == "information"] | order(publishedAt desc) {
      title, "slug": slug, publishedAt, body
    }
  `);
  if (data && data.length > 0) return data;
  return [...mockInformationPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getInformationPostBySlug(slug: string): Promise<InformationPost | undefined> {
  const data = await sanityClient.fetch(`
    *[_type == "information" && slug == $slug][0] {
      title, "slug": slug, publishedAt, body
    }
  `, { slug });
  if (data) return data;
  const posts = await getInformationPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getFavorites(): Promise<FavoriteItem[]> {
  const data: FavoriteItem[] | null = await sanityClient.fetch(`
    *[_type == "favorite"] | order(addedAt desc) {
      "slug": slug,
      "image": image ${img},
      caption, body, addedAt
    }
  `);
  if (data && data.length > 0) return data;
  return [...mockFavorites].sort(
    (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
  );
}

export async function getFavoriteBySlug(slug: string): Promise<FavoriteItem | undefined> {
  const data = await sanityClient.fetch(`
    *[_type == "favorite" && slug == $slug][0] {
      "slug": slug,
      "image": image ${img},
      caption, body, addedAt
    }
  `, { slug });
  if (data) return data;
  const items = await getFavorites();
  return items.find((i) => i.slug === slug);
}
