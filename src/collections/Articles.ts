import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: { en: 'Article', ar: 'مقال' },
    plural: { en: 'Articles', ar: 'المقالات' },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', '_status', 'featured', 'publishedDate', 'updatedAt'],
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return { _status: { equals: 'published' } }
    },
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
        }
        return data
      },
    ],
    beforeChange: [
      ({ data }) => {
        if (data?._status === 'published' && !data.publishedDate) {
          data.publishedDate = new Date().toISOString().split('T')[0]
        }
        return data
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: { en: 'Basics', ar: 'الأساسيات' },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: { en: 'Article Title', ar: 'عنوان المقال' },
              required: true,
              localized: true,
            },
            {
              name: 'slug',
              type: 'text',
              label: { en: 'Slug', ar: 'الرابط المختصر' },
              required: true,
              unique: true,
            },
            {
              name: 'excerpt',
              type: 'textarea',
              label: { en: 'Excerpt', ar: 'مقتطف' },
              localized: true,
              required: true,
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              label: { en: 'Featured Image', ar: 'الصورة الرئيسية' },
              required: true,
            },
          ],
        },
        {
          label: { en: 'Content', ar: 'المحتوى' },
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: { en: 'Content', ar: 'المحتوى' },
              localized: true,
              required: true,
            },
          ],
        },
        {
          label: { en: 'SEO', ar: 'SEO' },
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: { en: 'Search Engine Optimization', ar: 'تحسين محركات البحث' },
              fields: [
                {
                  name: 'metaTitle',
                  type: 'text',
                  label: { en: 'SEO Title', ar: 'عنوان SEO' },
                  localized: true,
                },
                {
                  name: 'metaDescription',
                  type: 'textarea',
                  label: { en: 'SEO Description', ar: 'وصف SEO' },
                  localized: true,
                },
                {
                  name: 'ogImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: { en: 'Share Image', ar: 'صورة المشاركة' },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      label: { en: 'Category', ar: 'التصنيف' },
      required: true,
      options: [
        { label: { en: 'Market Analysis', ar: 'تحليل السوق' }, value: 'market-analysis' },
        { label: { en: 'Design', ar: 'تصميم' }, value: 'design' },
        { label: { en: 'Projects', ar: 'مشاريع' }, value: 'projects' },
        { label: { en: 'Investment', ar: 'استثمار' }, value: 'investment' },
        { label: { en: 'Sustainability', ar: 'استدامة' }, value: 'sustainability' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'readTime',
      type: 'number',
      label: { en: 'Read Time (minutes)', ar: 'مدة القراءة (دقيقة)' },
      min: 1,
      defaultValue: 5,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: { en: 'Featured', ar: 'مميز' },
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: { en: 'Publish Date', ar: 'تاريخ النشر' },
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
  ],
}
