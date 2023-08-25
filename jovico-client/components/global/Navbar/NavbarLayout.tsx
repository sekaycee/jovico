import { resolveHref } from '../../../lib/sanity.links'
import Link from 'next/link'
import type { MenuItem, SettingsPayload } from '../../../types'

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props
  const menuItems = data?.menuItems || ([] as MenuItem[])
  return (
    <nav className='sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-black text-white px-4 py-4 backdrop-blur md:px-6 md:py-5 lg:px-8'>
      {/* <Link href={'/'} className='uppercase'>Jovico Bikes</Link> */}
      { menuItems && menuItems.map((menuItem, key) => {
        const href = resolveHref(menuItem?._type, menuItem?.slug)
        if (!href) return null

        return (
          <Link
            key={key}
            className={`text-lg hover:text-gray-300 md:text-xl ${
              menuItem?._type === 'home'
                ? 'font-extrabold text-white uppercase'
                : 'text-gray-500'
            }`}
            href={href}
          >
            {menuItem.title}
          </Link>
        )
      })}
    </nav>
  )
}