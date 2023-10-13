'use client'
import Image from 'next/image'
import Brand from '../public/AOSymbol.svg'
import HamburgerSymbol from '../public/block.svg'
import XSymbol from '../public/x.svg'
import { Poppins } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

const links = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/projects', label: 'Projects' },
]

const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  const [scrollBar, setScrollBar] = useState(false)

  if (scrollBar) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
  const handleBurgerClick = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen)
    setScrollBar(!scrollBar)
  }
  const handleNavItemsClick = () => {
    setHamburgerMenuOpen(false)
    setScrollBar(false)
  }
  return (
    <header className={poppins.className}>
      <nav className="flex items-center justify-between pt-1.5 font-semibold fixed  z-20 bg-white w-full">
        <div className="flex items-center pl-5 text-lg gap-3">
          <Image src={Brand} alt="/" className="h-14 w-14"></Image>
          <Link href={'/'}>
            <span>
              {' '}
              <span className=" text-golden">AO </span>
              Construction
            </span>
          </Link>
        </div>

        <ul
          className={`fixed flex -top-full gap-0 flex-col bg-white w-full text-center lg:static lg:flex-row lg:w-auto lg:top-auto lg:items-center lg:space-x-4 lg:pr-10 lg:gap-x-2 text-sm ${
            hamburgerMenuOpen
              ? 'top-0 h-screen justify-evenly items-center'
              : ''
          }`}
        >
          <li className=" flex-nowrap">
            <Link
              href={'/'}
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('home')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              Home
            </Link>
          </li>
          <li className=" whitespace-nowrap">
            <Link
              href={'/team'}
              onClick={() => {
                handleNavItemsClick()
              }}
              className="nav-link hover:underline decoration-2"
            >
              About Us
            </Link>
          </li>
          <li className=" flex-nowrap">
            <Link
              href="/projects"
              onClick={() => {
                handleNavItemsClick()
              }}
              className="nav-link hover:underline decoration-2"
            >
              Projects
            </Link>
          </li>
          <li className="flex-nowrap">
            <Link
              scroll={false}
              href={'/?a=services'}
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              Services
            </Link>
          </li>
          <li className="whitespace-nowrap">
            <Link
              href={'/?a=contact'}
              scroll={false}
              onClick={() => {
                handleNavItemsClick()
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link hover:underline decoration-2"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          onClick={handleBurgerClick}
          className="flex flex-col justify-center items-center lg:hidden pr-7 flex-shrink-0 p-2"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? 'rotate-45' : '-translate-y-1'
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-[2px] w-6 rounded-sm ${
              hamburgerMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}
          ></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
