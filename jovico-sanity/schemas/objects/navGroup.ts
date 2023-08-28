//File name: navItem.ts
//File location: schemas/objects

import { MenuIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigationGroup',
  title: 'Navigation Group',
  type: 'object',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navigation Group Title',
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
      name: 'items',
      title: 'Navigation items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'navigationItem'
        })
      ]
    })
  ]
})