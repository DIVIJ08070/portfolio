'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
]

export const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="gradient-text bg-gradient-to-r from-purple-600 to-pink-600">
            Portfolio
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-2 py-1 transition-colors ${
                pathname === item.path
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full h-[2px] w-full bg-purple-600 dark:bg-purple-400"
                  initial={false}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}