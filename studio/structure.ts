import { StructureBuilder } from 'sanity/structure';

// シングルトンは「新規作成」を出さず、直接編集画面を開く
export const singletonTypes = new Set(['siteSettings', 'profile']);
export const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export const structure = (S: StructureBuilder) =>
  S.list()
    .id('root')
    .title('コンテンツ')
    .items([
      S.listItem()
        .title('サイト設定')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('プロフィール')
        .id('profile')
        .child(
          S.document()
            .schemaType('profile')
            .documentId('profile')
        ),
      S.divider(),
      S.documentTypeListItem('work').title('実績（Archives）'),
      S.documentTypeListItem('information').title('お知らせ（Information）'),
      S.documentTypeListItem('favorite').title('お気に入り（Favorite）'),
    ]);
