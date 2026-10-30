import { defineField, defineType } from 'sanity';

export const profile = defineType({
  name: 'profile',
  title: 'プロフィール',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名前',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: '肩書き',
      description: '例: グラフィックデザイナー',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'photo',
      title: 'プロフィール写真',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: '代替テキスト（alt）',
          description: '画像が読み込めない場合や、目の不自由な方が音声読み上げで聞く際に使われるテキストです。画像の内容を一言で説明してください。例:「○○のプロフィール写真」',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: '自己紹介文',
      description: '一般の読者にも伝わる言葉で書いてください。専門用語には補足を加えてください。',
      type: 'text',
      rows: 6,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'skills',
      title: 'スキル一覧',
      description: '例: グラフィックデザイン、ブランディング、DTP',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'career',
      title: '経歴',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'year',
              title: '年',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'text',
              title: '内容',
              type: 'string',
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: 'year', subtitle: 'text' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'title', media: 'photo' },
  },
});
