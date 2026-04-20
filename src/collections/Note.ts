import type { CollectionConfig } from 'payload'

export const Note: CollectionConfig = {
  slug: 'note',
  labels: {
    singular: { en: 'Note', ar: 'ملاحظة' },
    plural: { en: 'Notes', ar: 'ملاحظات' },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'body',
      type: 'richText',
      localized: true,
    },
  ],
}
