import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { NavBar } from './_components/NavBar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TabPeek',
  description: 'Browser extension for tab preview',
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}>
        <div className="selection:bg-[hsl(320,65%,52%,20%)]"> 
          <header className="flex justify-end items-center gap-4 h-16">
            <NavBar/>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}