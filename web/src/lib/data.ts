// MOCK: Phase 3 でこのファイルの中身を Sanity からの取得に差し替える
import type { SiteSettings, Profile, Work, InformationPost, FavoriteItem } from '../types';
import { mockSiteSettings, mockProfile, mockWorks, mockInformationPosts, mockFavorites } from '../mock';

export async function getSiteSettings(): Promise<SiteSettings> {
  return mockSiteSettings;
}

export async function getProfile(): Promise<Profile> {
  return mockProfile;
}

export async function getWorks(): Promise<Work[]> {
  return [...mockWorks].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getWorkBySlug(slug: string): Promise<Work | undefined> {
  const works = await getWorks();
  return works.find((w) => w.slug === slug);
}

export async function getInformationPosts(): Promise<InformationPost[]> {
  return [...mockInformationPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getInformationPostBySlug(slug: string): Promise<InformationPost | undefined> {
  const posts = await getInformationPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getFavorites(): Promise<FavoriteItem[]> {
  return [...mockFavorites].sort(
    (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
  );
}

export async function getFavoriteBySlug(slug: string): Promise<FavoriteItem | undefined> {
  const items = await getFavorites();
  return items.find((i) => i.slug === slug);
}
