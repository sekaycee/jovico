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
      {title && (
        <section>
          <div className='relative isolate overflow-hidden bg-gray-900 min-h-screen'>
            <img
              src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
              alt=''
              className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
            />
            <div
              className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
              aria-hidden='true'
            >
              <div
                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
              aria-hidden='true'
            >
              <div
                className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className='mt-64'>
              <Header centered title={title} description={overview} />
            </div>
          </div>
        </section>
      )}

      {/* E-Bike Definition */}
      <section>
        <div className='min-h-screen px-4 lg:px-8'>
          <h2>What exactly is an e-bike?</h2>
          <p className='mt-10'>eBikes are one of the most sustainable means of transport and play a central role in the mobility of the future. But just what exactly is an eBike, how is it different from a regular bike and how does it enrich your life? Let us show you, explain the differences and highlight what makes an eBike with the Bosch system so special.</p>
        </div>
      </section>

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