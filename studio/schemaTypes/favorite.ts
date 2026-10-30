import { defineField, defineType } from 'sanity';

export const favorite = defineType({
  name: 'favorite',
  title: 'お気に入り（Favorite）',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'string',
      hidden: true,
      initialValue: () => Date.now().toString(36),
    }),
    defineField({
      name: 'image',
      title: '画像（必須）',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: '代替テキスト（alt）',
          description: '目の不自由な方が音声読み上げで聞いたり、画像が読み込めない場合に表示されるテキストです。画像の内容を一言で説明してください。例:「○○のポスター」「好きな本の表紙」',
          type: 'string',
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'caption',
      title: 'ひと言メモ（任意）',
      description: '画像の下に小さく表示される一言です。例:「光と影」「好きな質感」',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: '説明文（任意）',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'addedAt',
      title: '登録日（必須）',
      type: 'date',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: '登録日（新しい順）',
      name: 'addedAtDesc',
      by: [{ field: 'addedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'addedAt', media: 'image' },
    prepare({ title, media }) {
      return { title: title ?? '（日付未設定）', media };
    },
  },
});
