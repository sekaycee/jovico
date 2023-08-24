// import Link from 'next/link'
import { Header } from '../../shared/Header'
import type { HomePagePayload } from '../../../types'
// import { ProductListItem } from './ProductListItem'
// import { resolveHref } from '../../../lib/sanity.links'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseProducts = [], title = '' } = data ?? {}

  return (
    <main className='space-y-20'>
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase products */}
      {/* {showcaseProducts && showcaseProducts.length > 0 && (
        <div className='mx-auto max-w-[100rem] rounded-md border'>
          {showcaseProducts.map((product, key) => {
            const href = resolveHref(product._type, product.slug)
            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProductListItem product={product} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )} */}
    </main>
  )
}

export default HomePage