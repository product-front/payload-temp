/**
 * Seed Data
 *
 * Edit this file to change the demo content that gets seeded.
 * Images should be uploaded manually via the admin panel.
 */

/** Lexical richText format required by Payload 3.x */
function richText(text: string) {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', text, version: 1 }],
          direction: null,
          format: '',
          indent: 0,
          version: 1,
        },
      ],
      direction: null,
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

export const demoUser = {
  email: 'admin@example.com',
  password: 'admin123',
}

export const articles = [
  {
    title: { en: 'The Future of Sustainable Architecture', ar: 'مستقبل العمارة المستدامة' },
    slug: 'future-sustainable-architecture',
    excerpt: {
      en: 'Exploring innovative approaches to eco-friendly building design and their impact on urban landscapes.',
      ar: 'استكشاف أساليب مبتكرة في تصميم المباني الصديقة للبيئة وتأثيرها على المناظر الحضرية.',
    },
    content: {
      en: richText('Exploring innovative approaches to eco-friendly building design and their impact on urban landscapes.'),
      ar: richText('استكشاف أساليب مبتكرة في تصميم المباني الصديقة للبيئة وتأثيرها على المناظر الحضرية.'),
    },
    category: 'design',
    _status: 'published' as const,
    readTime: 7,
    featured: true,
    publishedDate: '2026-04-01',
  },
  {
    title: { en: 'Market Analysis: Real Estate Trends 2026', ar: 'تحليل السوق: اتجاهات العقارات 2026' },
    slug: 'market-analysis-2026',
    excerpt: {
      en: 'A comprehensive overview of the real estate market shifts and investment opportunities this year.',
      ar: 'نظرة شاملة على تحولات سوق العقارات وفرص الاستثمار لهذا العام.',
    },
    content: {
      en: richText('A comprehensive overview of the real estate market shifts and investment opportunities this year.'),
      ar: richText('نظرة شاملة على تحولات سوق العقارات وفرص الاستثمار لهذا العام.'),
    },
    category: 'market-analysis',
    _status: 'published' as const,
    readTime: 10,
    featured: false,
    publishedDate: '2026-03-15',
  },
  {
    title: { en: 'Green Building Investments', ar: 'الاستثمار في المباني الخضراء' },
    slug: 'green-building-investments',
    excerpt: {
      en: 'Why sustainable construction projects are becoming the most attractive investment option.',
      ar: 'لماذا أصبحت مشاريع البناء المستدام الخيار الاستثماري الأكثر جاذبية.',
    },
    content: {
      en: richText('Why sustainable construction projects are becoming the most attractive investment option.'),
      ar: richText('لماذا أصبحت مشاريع البناء المستدام الخيار الاستثماري الأكثر جاذبية.'),
    },
    category: 'investment',
    _status: 'draft' as const,
    readTime: 5,
    featured: false,
    publishedDate: '2026-04-10',
  },
]
