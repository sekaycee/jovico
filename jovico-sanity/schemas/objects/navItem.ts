//File name: navItem.ts
//File location: schemas/objects

import { MenuIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Navigation Text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'navigationItemUrl',
      type: 'link', 
      title: 'Navigation Item URL'
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Navigation Image'
    }),
    defineField({
      name: 'links',
      title: 'Navigation item links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'link'
        })
      ]
    })
  ]
})