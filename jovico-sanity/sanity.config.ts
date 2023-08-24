import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import Iframe, {
  defineUrlResolver,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'

import {schemaTypes} from './schemas'
import { pageStructure, singletonPlugin } from './plugins/settings'

const [author, home, page, post, product, settings] = schemaTypes

export const PREVIEWABLE_DOCUMENT_TYPES = [
  schemaTypes[0].name,
  schemaTypes[1].name,
  schemaTypes[2].name,
  schemaTypes[3].name,
  schemaTypes[5].name,
] satisfies string[]

export const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [
  page.name,
  product.name,
] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES

// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = '/api/draft'

export const urlResolver = defineUrlResolver({
  base: PREVIEW_BASE_URL,
  requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
})

export const iframeOptions = {
  url: urlResolver,
  urlSecretId: 'preview.secret',
} satisfies IframeOptions

export default defineConfig({
  name: 'default',
  basePath: '/studio',
  title: 'Jovico Sanity',

  projectId: '9346fe9i',
  dataset: 'production',

  // plugins: [deskTool(), visionTool()],
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        if ((PREVIEWABLE_DOCUMENT_TYPES as string[]).includes(schemaType)) {
          return S.document().views([
            // Default form view
            S.view.form(),
            // Preview
            S.view.component(Iframe).options(iframeOptions).title('Preview'),
          ])
        }

        return null
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    previewUrl({
      base: PREVIEW_BASE_URL,
      requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
      urlSecretId: 'preview.secret',
      matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: '2023-06-21' }),
  ],

  schema: {
    types: schemaTypes,
  },
})
