// MOCK: Phase 3 で Sanity のデータに差し替える
import type { SiteSettings, Profile, Work, InformationPost, FavoriteItem } from "../types";

export const mockSiteSettings: SiteSettings = {
  siteTitle: "tomo-iwade",
  siteDescription: "Tomomasa Iwade archives",
  defaultOgImage: {
    url: "/portfolio/splash.jpeg",
    alt: "いわでともまさのポートフォリオ",
  },
  email: "hello@example.com",
  socialLinks: [
    {
      platform: "instagram",
      url: "https://www.instagram.com/_i_wade?srtk=bngxNzltNHU5NDhq",
    },
    { platform: "tumblr", url: "https://www.tumblr.com/i-wade-jp" },
    { platform: "threads", url: "https://www.threads.com/@_i_wade?xmt=AQG0LnCjgPTvLyj3t0WdtuSocPVe2ceDxjCQ3wEytbBLrVs" },
  ],
};

export const mockProfile: Profile = {
  name: "Tomo",
  title: "グラフィックデザイナー",
  photo: {
    url: "https://picsum.photos/seed/profilephoto/600/600",
    alt: "Tomo のプロフィール写真",
  },
  bio: "ブランディングやパッケージデザインを中心に、印刷物からデジタルまで幅広く対応しています。\n\n依頼者と丁寧にコミュニケーションをとりながら、伝えたいことがシンプルに伝わるデザインを目指しています。",
  skills: [
    "ブランディング",
    "ロゴデザイン",
    "パッケージデザイン",
    "エディトリアルデザイン",
    "ビジュアルアイデンティティ",
    "UIデザイン",
  ],
  career: [
    {
      year: "2018",
      text: "デザイン事務所に入社。ブランディングや印刷物のデザインを担当",
    },
    {
      year: "2021",
      text: "フリーランスとして独立。国内外のクライアントと協業",
    },
    { year: "2023", text: "個人スタジオを設立" },
  ],
};

export const mockWorks: Work[] = [
  {
    title: "ブランドロゴデザイン",
    slug: "brand-logo-01",
    publishedAt: "2024-09-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work1/1600/900",
      alt: "コーヒーショップのブランドロゴデザイン",
    },
    summary:
      "コーヒーショップ向けのロゴとブランドアイデンティティを制作しました。温かみのある素材感と、シンプルで覚えやすい形を両立しています。",
    body: "コーヒーの産地を大切にするオーナーの想いをもとに、豆の形とカップのシルエットを組み合わせたロゴを制作しました。\n\nカラーパレットは落ち着いたブラウン系で統一し、名刺・ショップカード・パッケージにも展開しています。",
    images: [
      {
        url: "https://picsum.photos/seed/work1a/1600/900",
        alt: "ロゴ完成形",
        caption: "メインロゴ",
      },
    ],
  },
  {
    title: "パッケージデザイン — 季節のお菓子",
    slug: "package-seasonal-sweets",
    publishedAt: "2024-08-15",
    thumbnail: {
      url: "https://picsum.photos/seed/work2/1600/900",
      alt: "季節のお菓子パッケージデザイン",
    },
    summary:
      "春・夏・秋・冬の4シーズン分のパッケージをシリーズで制作。棚に並べたときの統一感と、個々の季節感のバランスを意識して設計しました。",
    body: "4種類が並んだときの統一感と、個々の季節感のバランスを最優先に設計しました。\n\n素材はマット紙を採用し、手に取ったときの感触も含めて贈り物としての価値を高めています。",
    images: [
      {
        url: "https://picsum.photos/seed/work2a/1600/900",
        alt: "春のパッケージ",
        caption: "春",
      },
      {
        url: "https://picsum.photos/seed/work2b/1600/900",
        alt: "夏のパッケージ",
        caption: "夏",
      },
      {
        url: "https://picsum.photos/seed/work2c/1600/900",
        alt: "秋・冬のパッケージ",
        caption: "秋・冬",
      },
    ],
  },
  {
    title: "Corporate Identity 03",
    slug: "corporate-identity-03",
    publishedAt: "2024-07-20",
    thumbnail: {
      url: "https://picsum.photos/seed/work3/1600/900",
      alt: "コーポレートアイデンティティデザイン",
    },
    summary:
      "建築事務所のコーポレートアイデンティティを一式制作しました。清潔感と専門性を両立しつつ、長く使われることを意識したビジュアルを目指しました。",
  },
  {
    title:
      "ウェブサイトのビジュアルデザイン — 長めのタイトルで折り返し表示を確認するためのサンプル実績",
    slug: "web-visual-04",
    publishedAt: "2024-06-10",
    thumbnail: {
      url: "https://picsum.photos/seed/work4/1600/900",
      alt: "ウェブサイトのビジュアルデザイン",
    },
    summary:
      "コーポレートサイトのリニューアルに際して、ビジュアルコンセプトの立案からページデザインまでを担当しました。",
    body: "ブランドのトーンを引き継ぎながら、スマートフォンファーストで全ページを再設計しました。",
    images: [
      {
        url: "https://picsum.photos/seed/work4a/1600/900",
        alt: "トップページデザイン",
      },
      {
        url: "https://picsum.photos/seed/work4b/1600/900",
        alt: "下層ページデザイン",
      },
    ],
  },
  {
    title: "ポスターシリーズ",
    slug: "poster-series-05",
    publishedAt: "2024-05-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work5/1600/900",
      alt: "ポスターシリーズのサムネイル",
    },
    summary: "音楽イベント向けのポスターシリーズ。短い説明のサンプルです。",
    images: [
      {
        url: "https://picsum.photos/seed/work5a/1600/900",
        alt: "ポスター Vol.1",
        caption: "Vol.1",
      },
      {
        url: "https://picsum.photos/seed/work5b/1600/900",
        alt: "ポスター Vol.2",
        caption: "Vol.2",
      },
      {
        url: "https://picsum.photos/seed/work5c/1600/900",
        alt: "ポスター Vol.3",
        caption: "Vol.3",
      },
      {
        url: "https://picsum.photos/seed/work5d/1600/900",
        alt: "3枚並べた状態",
        caption: "パノラマ表示",
      },
      {
        url: "https://picsum.photos/seed/work5e/1600/900",
        alt: "掲出イメージ",
      },
    ],
  },
  {
    title: "Brochure Design 06",
    slug: "brochure-06",
    publishedAt: "2024-04-18",
    thumbnail: {
      url: "https://picsum.photos/seed/work6/1600/900",
      alt: "ブローシャーデザイン",
    },
    summary:
      "商品カタログのレイアウトデザイン。写真と文字の比率をページごとにリズムをつけながら構成し、最後まで読み進めやすい誌面を設計しました。",
    images: [
      {
        url: "https://picsum.photos/seed/work6a/1600/900",
        alt: "表紙デザイン",
        caption: "表紙",
      },
    ],
    externalUrl: "https://example.com",
  },
  {
    title: "展示会グラフィック",
    slug: "exhibition-graphic-07",
    publishedAt: "2024-03-05",
    thumbnail: {
      url: "https://picsum.photos/seed/work7/1600/900",
      alt: "展示会グラフィックのサムネイル",
    },
    summary:
      "大規模な展示会のグラフィックシステムを設計しました。会場内のサインや誘導板からパンフレットまで、一貫したビジュアルで統一しています。これは画像なし確認用のサンプルです。",
  },
  {
    title: "実績タイトル 08 — SNS用ビジュアル",
    slug: "sns-visual-08",
    publishedAt: "2024-02-14",
    thumbnail: {
      url: "https://picsum.photos/seed/work8/1600/900",
      alt: "SNS用ビジュアル制作",
    },
    summary:
      "InstagramとX向けのビジュアルテンプレートを制作。複数人のチームが使っても統一感が出るよう、使いやすいテンプレートにまとめました。",
    images: [
      {
        url: "https://picsum.photos/seed/work8a/1600/900",
        alt: "Instagramフィード用テンプレート",
      },
      {
        url: "https://picsum.photos/seed/work8b/1600/900",
        alt: "Instagramストーリー用テンプレート",
      },
      {
        url: "https://picsum.photos/seed/work8c/1600/900",
        alt: "X投稿用テンプレート",
      },
      { url: "https://picsum.photos/seed/work8d/1600/900", alt: "使用例" },
    ],
  },
  {
    title: "アプリUIデザイン",
    slug: "app-ui-09",
    publishedAt: "2024-01-20",
    thumbnail: {
      url: "https://picsum.photos/seed/work9/1600/900",
      alt: "モバイルアプリUIデザイン",
    },
    summary:
      "レシピ管理アプリのUIデザインを担当しました。料理をあまりしない人でも使いやすいシンプルな操作フローを設計しています。",
    body: "ユーザーインタビューをもとに、よく使う機能を3タップ以内で完結できるフローを設計しました。\n\nカラーは食欲をそそる暖色系でまとめつつ、長時間の使用でも疲れにくい配色を意識しています。",
    images: [
      {
        url: "https://picsum.photos/seed/work9a/1600/900",
        alt: "ホーム画面",
        caption: "ホーム",
      },
      {
        url: "https://picsum.photos/seed/work9b/1600/900",
        alt: "レシピ詳細画面",
        caption: "詳細ページ",
      },
    ],
  },
  {
    title: "実績タイトル 10",
    slug: "work-10",
    publishedAt: "2023-12-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work10/1600/900",
      alt: "ダミー実績10のサムネイル",
    },
    summary:
      "これはレイアウト確認用のダミーデータです。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 11",
    slug: "work-11",
    publishedAt: "2023-11-10",
    thumbnail: {
      url: "https://picsum.photos/seed/work11/1600/900",
      alt: "ダミー実績11のサムネイル",
    },
    summary: "ダミーデータ 11。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 12",
    slug: "work-12",
    publishedAt: "2023-10-20",
    thumbnail: {
      url: "https://picsum.photos/seed/work12/1600/900",
      alt: "ダミー実績12のサムネイル",
    },
    summary: "ダミーデータ 12。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 13",
    slug: "work-13",
    publishedAt: "2023-09-15",
    thumbnail: {
      url: "https://picsum.photos/seed/work13/1600/900",
      alt: "ダミー実績13のサムネイル",
    },
    summary: "ダミーデータ 13。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 14",
    slug: "work-14",
    publishedAt: "2023-08-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work14/1600/900",
      alt: "ダミー実績14のサムネイル",
    },
    summary: "ダミーデータ 14。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 15",
    slug: "work-15",
    publishedAt: "2023-07-10",
    thumbnail: {
      url: "https://picsum.photos/seed/work15/1600/900",
      alt: "ダミー実績15のサムネイル",
    },
    summary: "ダミーデータ 15。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 16",
    slug: "work-16",
    publishedAt: "2023-06-20",
    thumbnail: {
      url: "https://picsum.photos/seed/work16/1600/900",
      alt: "ダミー実績16のサムネイル",
    },
    summary: "ダミーデータ 16。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 17",
    slug: "work-17",
    publishedAt: "2023-05-15",
    thumbnail: {
      url: "https://picsum.photos/seed/work17/1600/900",
      alt: "ダミー実績17のサムネイル",
    },
    summary: "ダミーデータ 17。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 18",
    slug: "work-18",
    publishedAt: "2023-04-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work18/1600/900",
      alt: "ダミー実績18のサムネイル",
    },
    summary: "ダミーデータ 18。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 19",
    slug: "work-19",
    publishedAt: "2023-03-10",
    thumbnail: {
      url: "https://picsum.photos/seed/work19/1600/900",
      alt: "ダミー実績19のサムネイル",
    },
    summary: "ダミーデータ 19。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 20",
    slug: "work-20",
    publishedAt: "2023-02-20",
    thumbnail: {
      url: "https://picsum.photos/seed/work20/1600/900",
      alt: "ダミー実績20のサムネイル",
    },
    summary: "ダミーデータ 20。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 21",
    slug: "work-21",
    publishedAt: "2023-01-15",
    thumbnail: {
      url: "https://picsum.photos/seed/work21/1600/900",
      alt: "ダミー実績21のサムネイル",
    },
    summary: "ダミーデータ 21。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 22",
    slug: "work-22",
    publishedAt: "2022-12-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work22/1600/900",
      alt: "ダミー実績22のサムネイル",
    },
    summary: "ダミーデータ 22。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 23",
    slug: "work-23",
    publishedAt: "2022-11-10",
    thumbnail: {
      url: "https://picsum.photos/seed/work23/1600/900",
      alt: "ダミー実績23のサムネイル",
    },
    summary: "ダミーデータ 23。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 24",
    slug: "work-24",
    publishedAt: "2022-10-20",
    thumbnail: {
      url: "https://picsum.photos/seed/work24/1600/900",
      alt: "ダミー実績24のサムネイル",
    },
    summary: "ダミーデータ 24。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 25",
    slug: "work-25",
    publishedAt: "2022-09-15",
    thumbnail: {
      url: "https://picsum.photos/seed/work25/1600/900",
      alt: "ダミー実績25のサムネイル",
    },
    summary: "ダミーデータ 25。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 26",
    slug: "work-26",
    publishedAt: "2022-08-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work26/1600/900",
      alt: "ダミー実績26のサムネイル",
    },
    summary: "ダミーデータ 26。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 27",
    slug: "work-27",
    publishedAt: "2022-07-10",
    thumbnail: {
      url: "https://picsum.photos/seed/work27/1600/900",
      alt: "ダミー実績27のサムネイル",
    },
    summary: "ダミーデータ 27。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 28",
    slug: "work-28",
    publishedAt: "2022-06-20",
    thumbnail: {
      url: "https://picsum.photos/seed/work28/1600/900",
      alt: "ダミー実績28のサムネイル",
    },
    summary: "ダミーデータ 28。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 29",
    slug: "work-29",
    publishedAt: "2022-05-15",
    thumbnail: {
      url: "https://picsum.photos/seed/work29/1600/900",
      alt: "ダミー実績29のサムネイル",
    },
    summary: "ダミーデータ 29。実際の実績に差し替えてください。",
  },
  {
    title: "実績タイトル 30",
    slug: "work-30",
    publishedAt: "2022-04-01",
    thumbnail: {
      url: "https://picsum.photos/seed/work30/1600/900",
      alt: "ダミー実績30のサムネイル",
    },
    summary: "ダミーデータ 30。実際の実績に差し替えてください。",
  },
];

export const mockInformationPosts: InformationPost[] = [
  {
    title: "このサイトについて",
    slug: "about-this-site",
    publishedAt: "2024-09-15",
    body: "はじめまして。グラフィックデザイナーの Tomo です。\n\nこのサイトは、これまでに手がけた仕事を紹介するポートフォリオです。ブランディング、パッケージ、エディトリアルデザインなど、印刷物を中心にさまざまな仕事を掲載しています。\n\n仕事のご依頼やご相談は、Instagram や Behance のメッセージからお気軽にどうぞ。",
  },
  {
    title: "サイトを公開しました",
    slug: "site-launch",
    publishedAt: "2024-09-10",
    body: "ポートフォリオサイトを公開しました。\n\nしばらくSNSだけで活動していましたが、まとめて見られる場所をつくろうと思い、このサイトを立ち上げました。随時、過去の仕事も追加していく予定です。",
  },
  {
    title: "展示会のグラフィックを担当しました",
    slug: "info-03",
    publishedAt: "2024-07-20",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
  {
    title: "パッケージデザインの新作を追加しました",
    slug: "info-04",
    publishedAt: "2024-06-05",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
  {
    title: "お知らせ — 長めのタイトルが入った場合の折り返し確認用サンプルです",
    slug: "info-05",
    publishedAt: "2024-04-18",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
  {
    title: "ブランディングのプロジェクトが公開されました",
    slug: "info-06",
    publishedAt: "2024-03-01",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
  {
    title: "年末年始の休業について",
    slug: "info-07",
    publishedAt: "2023-12-25",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
  {
    title: "Behance を更新しました",
    slug: "info-08",
    publishedAt: "2023-11-10",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
  {
    title: "活動拠点を移転しました",
    slug: "info-09",
    publishedAt: "2023-09-01",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
  {
    title: "お仕事の受付を再開しました",
    slug: "info-10",
    publishedAt: "2023-06-15",
    body: "ダミーテキストです。実際の内容に差し替えてください。",
  },
];

export const mockFavorites: FavoriteItem[] = [
  { slug: "fav-01", image: { url: "https://picsum.photos/seed/fav1/800/1000", alt: "" }, caption: "余白の取り方", body: "この写真を見たとき、余白の使い方がすごく気持ちよかった。\n\n何も置かれていない空間が、むしろ存在感を持っている感じ。デザインでも同じことを意識したいと思った。", addedAt: "2024-10-01" },
  { slug: "fav-02", image: { url: "https://picsum.photos/seed/fav2/800/600", alt: "" }, addedAt: "2024-09-28" },
  { slug: "fav-03", image: { url: "https://picsum.photos/seed/fav3/800/800", alt: "" }, caption: "光と影", body: "朝の光がこんなふうに差し込む場所を探してた。影の形が好き。", addedAt: "2024-09-20" },
  { slug: "fav-04", image: { url: "https://picsum.photos/seed/fav4/800/1100", alt: "" }, addedAt: "2024-09-15" },
  { slug: "fav-05", image: { url: "https://picsum.photos/seed/fav5/800/600", alt: "" }, addedAt: "2024-09-10" },
  { slug: "fav-06", image: { url: "https://picsum.photos/seed/fav6/800/900", alt: "" }, body: "パッケージを見るのが好きで、これは特に紙の質感と印刷の組み合わせが良かった。\n\nマットな仕上げに細い線が映える。いつか参考にしたい。", addedAt: "2024-09-05" },
  { slug: "fav-07", image: { url: "https://picsum.photos/seed/fav7/800/600", alt: "" }, caption: "好きな質感", addedAt: "2024-08-30" },
  { slug: "fav-08", image: { url: "https://picsum.photos/seed/fav8/800/1000", alt: "" }, addedAt: "2024-08-22" },
  { slug: "fav-09", image: { url: "https://picsum.photos/seed/fav9/800/700", alt: "" }, addedAt: "2024-08-15" },
  { slug: "fav-10", image: { url: "https://picsum.photos/seed/fav10/800/800", alt: "" }, caption: "色の組み合わせ", body: "くすんだ青と生成りの組み合わせ。主張しすぎず、でもちゃんと存在感がある。", addedAt: "2024-08-01" },
  { slug: "fav-11", image: { url: "https://picsum.photos/seed/fav11/800/600", alt: "" }, addedAt: "2024-07-20" },
  { slug: "fav-12", image: { url: "https://picsum.photos/seed/fav12/800/1050", alt: "" }, addedAt: "2024-07-10" },
];
