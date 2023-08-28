//File name: link.ts
//File location: schemas/objects

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
    name: 'internalLink',
    title: 'Internal Link',
    description: 'Select pages for navigation',
    type: 'reference',
    to: [{ type: 'page' },{ type: 'post' },{ type: 'product' }], 
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      description:'Use fully qualified URLS for external link',
      type: 'url',
    }),
  ]
})