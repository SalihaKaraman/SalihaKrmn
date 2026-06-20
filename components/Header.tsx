'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Saliha Karaman
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600 transition">
              Anasayfa
            </Link>
            <Link href="/hakkimda" className="hover:text-blue-600 transition">
              Hakkımda
            </Link>
            <Link href="/projeler" className="hover:text-blue-600 transition">
              Projelerim
            </Link>
            <Link href="/iletisim" className="hover:text-blue-600 transition">
              İletişim
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-3">
            <Link href="/" className="block hover:text-blue-600 transition">
              Anasayfa
            </Link>
            <Link href="/hakkimda" className="block hover:text-blue-600 transition">
              Hakkımda
            </Link>
            <Link href="/projeler" className="block hover:text-blue-600 transition">
              Projelerim
            </Link>
            <Link href="/iletisim" className="block hover:text-blue-600 transition">
              İletişim
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
