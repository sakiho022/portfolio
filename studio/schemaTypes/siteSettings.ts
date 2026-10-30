import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'サイト設定',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'サイト名',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'サイト説明文（meta description）',
      description: '検索結果やSNSシェア時に表示される文章です。120文字程度で書いてください。',
      type: 'text',
      rows: 3,
      validation: (r) => r.required().max(160),
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'デフォルトOGP画像',
      description: 'SNSでシェアされたときに表示される画像です。1200×630px推奨。',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: '代替テキスト（alt）',
          description: '画像が読み込めない場合や、目の不自由な方が音声読み上げで聞く際に使われるテキストです。画像の内容を一言で説明してください。例:「○○のロゴ」「プロフィール写真」',
          type: 'string',
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'email',
      title: 'メールアドレス（任意）',
      description: '入力した場合のみフッターに表示されます。',
      type: 'string',
      validation: (r) => r.email(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'SNSリンク',
      description: 'アイコンはプラットフォームに合わせて自動で表示されます。URLは必ず更新してください。',
      type: 'array',
      initialValue: [
        { _key: 'instagram', platform: 'instagram', url: 'https://www.instagram.com/_i_wade' },
        { _key: 'tumblr',    platform: 'tumblr',    url: 'https://www.tumblr.com/i-wade-jp' },
        { _key: 'threads',   platform: 'threads',   url: 'https://www.threads.com/@_i_wade' },
      ],
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'プラットフォーム',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Threads', value: 'threads' },
                  { title: 'X（旧Twitter）', value: 'x' },
                  { title: 'Tumblr', value: 'tumblr' },
                  { title: 'Behance', value: 'behance' },
                  { title: 'その他', value: 'other' },
                ],
                layout: 'radio',
              },
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (r) => r.required().uri({ scheme: ['http', 'https'] }),
            }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
      validation: (r) => r.min(0),
    }),
  ],
  preview: {
    select: { title: 'siteTitle' },
  },
});
