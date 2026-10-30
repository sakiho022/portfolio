import { defineField, defineType } from 'sanity';

export const work = defineType({
  name: 'work',
  title: '実績（Archives）',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '実績名（必須）',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'string',
      hidden: true,
      initialValue: () => Date.now().toString(36),
    }),
    defineField({
      name: 'publishedAt',
      title: '公開年月（必須）',
      description: '実績一覧の並び順に使います。新しい日付ほど上に表示されます。予約公開の機能はありません。「公開」ボタンを押した時点でサイトに反映されます。',
      type: 'date',
      options: { dateFormat: 'YYYY-MM' },
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'サムネイル画像（必須）',
      description: '横長（16:9）の画像を登録してください。縦長・正方形の画像は左右が切れます。',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: '代替テキスト（alt）',
          description: '目の不自由な方が音声読み上げで聞いたり、画像が読み込めない場合に表示されるテキストです。画像の内容を一言で説明してください。例:「○○のロゴデザイン」「パッケージ完成写真」',
          type: 'string',
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'role',
      title: '担当範囲（任意）',
      description: '一般の人にも伝わる言葉で書いてください。例:「ロゴとパッケージのデザイン」「アートディレクション（全体の方向性づくり）」',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      title: '概要（必須）',
      description: '一覧ページと検索結果に使う短い説明です。120文字程度で書いてください。',
      type: 'text',
      rows: 3,
      validation: (r) => r.required().max(160),
    }),
    defineField({
      name: 'body',
      title: '詳細説明（任意）',
      description: '詳細ページに表示されます。空行で段落が分かれます。',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'images',
      title: '詳細ページの画像（任意）',
      description: '詳細ページに並べて表示します。複数登録できます。',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: '代替テキスト（alt）',
              description: '目の不自由な方が音声読み上げで聞いたり、画像が読み込めない場合に表示されるテキストです。画像の内容を一言で説明してください。例:「ロゴの使用例」「パッケージ横並びの写真」',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: '画像の説明（任意）',
              description: '画像の下に小さく表示される一言です。例:「春バージョン」「完成形」「使用イメージ」',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'externalUrl',
      title: '関連URL（任意）',
      description: '関連サイトや動画がある場合に入力してください。',
      type: 'url',
      validation: (r) => r.uri({ scheme: ['http', 'https'] }),
    }),
  ],
  orderings: [
    {
      title: '公開日（新しい順）',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'thumbnail' },
  },
});
