import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'xtdqunyz',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false, // 静的ビルド時は常に最新データを取得
});
