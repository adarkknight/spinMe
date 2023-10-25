import '../app/globals.css'
import type { Metadata } from 'next'
import Footer from './footer'
import { ClerkProvider } from '@clerk/nextjs'

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
    <ClerkProvider>
    <html lang="en" data-theme="retro">
      <body className="min-h-screen flex flex-col items-center">
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  )
}
