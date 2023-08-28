//File name: navigation.ts
//File location: schemas/documents

import { MenuIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: MenuIcon,
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required()
      }),
      defineField({
        name: 'navId',
        title: 'Navigation Id',
        type: 'slug',
        validation: (rule) => rule.required()
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