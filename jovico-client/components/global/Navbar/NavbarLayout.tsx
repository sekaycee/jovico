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
    <div className='sticky top-0 z-50 flex flex-wrap items-center bg-black text-white px-4 py-4 backdrop-blur md:px-6 md:py-5 lg:px-8'>
      <nav className='flex gap-x-5'>
        {/* <Link href={'/'} className='uppercase'>Jovico Bikes</Link> */}
        { menuItems && menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) return null

          return (
            <Link
              key={key}
              className={`flex items-center hover:text-gray-300 ${
                menuItem?._type === 'home'
                  ? 'text-lg md:text-xl font-extrabold text-white uppercase mr-10'
                  : 'hidden md:flex text-sm text-gray-500 font-medium'
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
      </nav>

      <div className='flex flex-1 items-center justify-end gap-4'>
        <div className='sm:flex sm:gap-4'>
          <a
            className='hidden md:block hover:border bg-transparent px-5 py-2 text-sm font-medium text-white hover:text-gray-400 transition hover:border-gray-400'
            href='/help'
          >
            Help
          </a>

          <a
            className='hidden border border-gray-700 hover:border-gray-300 bg-gray-900 hover:bg-gray-700 px-5 py-2 text-sm font-medium text-gray-300 transition hover:text-white md:block'
            href='/'
          >
            Contact
          </a>
        </div>

        <button
          className='block border text-gray-300 transition hover:text-white p-2 border-gray-300 hover:border-gray-50 md:hidden'
        >
          <span className='sr-only'>Toggle menu</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}