import type { CollectionConfig } from 'payload'

export const Note: CollectionConfig = {
  slug: 'note',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'richText',
    },
  ],
}
