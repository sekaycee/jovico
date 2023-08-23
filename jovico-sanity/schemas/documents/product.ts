import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your product.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and product subheader.',
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required()
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      description:
        'This image will be used as the cover image for the product. If you choose to add it to the show case products, this is the image displayed in the list within the homepage.',
      options: {
        hotspot: true,
      },
      type: 'image',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'creator',
      title: 'Creator',
      type: 'string',
    }),
    /*defineField({
      name: 'site',
      title: 'Site',
      type: 'url',
    }),*/
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      }
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: []
        }),
        // Custom blocks
        defineField({
          icon: ImageIcon,
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'image',
              preview: {
                select: {
                  imageUrl: 'asset.url',
                  title: 'caption',
                },
              },
              fields: [
                defineField({
                  title: 'Caption',
                  name: 'caption',
                  type: 'string',
                }),
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alt text',
                  description:
                    'Alternative text for screenreaders. Falls back on caption if not set',
                }),
              ],
            })
          ],
          options: {
            // hotspot: true,
            layout: 'grid'
          },
        }),
      ],
    }),
  ],
})