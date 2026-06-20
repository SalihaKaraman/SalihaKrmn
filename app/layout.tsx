import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Saliha Karaman - Portfolio',
  description: 'Kişisel portföy sitesi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head />
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
