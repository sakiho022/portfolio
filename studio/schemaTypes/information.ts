import { defineField, defineType } from 'sanity';

export const information = defineType({
  name: 'information',
  title: 'お知らせ（Information）',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル（必須）',
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
      title: '公開日（必須）',
      type: 'date',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: '本文（任意）',
      type: 'text',
      rows: 8,
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
    select: { title: 'title', subtitle: 'publishedAt' },
  },
});
