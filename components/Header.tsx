'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white tracking-wider">
            <span className="text-violet-400">DEV_</span>PORTFOLIO10
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded transition"
          >
            <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              <Link href="/hakkimda" className="text-slate-300 hover:text-white transition text-sm">
                Hakkımda
              </Link>
              <Link href="/projeler" className="text-slate-300 hover:text-white transition text-sm">
                Projeler
              </Link>
              <Link href="/hakkimda" className="text-slate-300 hover:text-white transition text-sm">
                Yetenekler
              </Link>
              <Link href="/iletisim" className="text-slate-300 hover:text-white transition text-sm">
                İletişim
              </Link>
            </nav>
            
            <div className="flex gap-3 pl-8 border-l border-slate-700">
              <a
                href="/projeler"
                className="px-4 py-2 text-slate-300 hover:text-white text-sm transition"
              >
                Projeleri Gör
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white text-sm rounded transition font-semibold"
              >
                CV İndir
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4">
            <Link href="/hakkimda" className="block text-slate-300 hover:text-white transition py-2">
              Hakkımda
            </Link>
            <Link href="/projeler" className="block text-slate-300 hover:text-white transition py-2">
              Projeler
            </Link>
            <Link href="/hakkimda" className="block text-slate-300 hover:text-white transition py-2">
              Yetenekler
            </Link>
            <Link href="/iletisim" className="block text-slate-300 hover:text-white transition py-2">
              İletişim
            </Link>
            <div className="flex gap-2 pt-4 border-t border-slate-700">
              <a href="/projeler" className="flex-1 px-4 py-2 text-slate-300 text-center text-sm rounded border border-slate-700">
                Projeleri Gör
              </a>
              <a href="#" className="flex-1 px-4 py-2 bg-violet-500 text-white text-center text-sm rounded font-semibold">
                CV
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
