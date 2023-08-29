// import './globals.css'
import '../../styles/index.css'

import Footer from '../../components/global/Footer'
import Navbar from '../../components/global/Navbar'
import { PreviewBanner } from '../../components/preview/PreviewBanner'
import { token } from '../../lib/sanity.fetch'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

const PreviewProvider = dynamic(
  () => import('../../components/preview/PreviewProvider'),
)

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const isDraftMode = draftMode().isEnabled

  const layout = (
    <div className='flex min-h-screen flex-col bg-black text-white'>
      {isDraftMode && <PreviewBanner />}
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <Navbar />
      </Suspense>
      <div className='flex-grow'>
        <Suspense>{children}</Suspense>
      </div>
      <Suspense>
        {/* @ts-expect-error Async Server Component */}
        <Footer />
      </Suspense>
    </div>
  )

  if (isDraftMode) {
    return <PreviewProvider token={token!}>{layout}</PreviewProvider>
  }

  return layout
}
