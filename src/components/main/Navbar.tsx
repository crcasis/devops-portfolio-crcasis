'use client'

import { useState } from 'react'
import { TbTerminal2 } from 'react-icons/tb'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-neutral-700 bg-neutral-800/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        <a
          href="#about"
          className="group flex items-center space-x-3"
          aria-label="Navigate to About section"
        >
          <TbTerminal2 className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-lg font-bold text-neutral-100 group-hover:text-red-500 transition-colors">
            Ashlok Chaudhary
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-neutral-300">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-red-500 transition-colors"
              aria-label={`Go to ${item}`}
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-neutral-200 p-2 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-neutral-900/95 border-t border-neutral-700 px-4 py-4 space-y-4 text-neutral-200">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block text-base hover:text-red-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
