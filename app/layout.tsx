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
    <ClerkProvider
      appearance={{
          elements: {
            card:
              "w-auto h-auto bg-neutral-content",
            formButtonPrimary:
              "bg-neutral",
            userButtonPopoverCard: "w-60 bg-neutral-content"
          },
        }}
    >
    <html lang="en" data-theme="retro">
      <body className="min-h-screen flex flex-col items-center">
        <main className="min-w-full flex-1">
        {children}
        </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  )
}
