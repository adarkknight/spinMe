import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'spinMe',
  description: "Find something to listen to",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="retro">
      <body className="min-h-screen flex flex-col items-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
