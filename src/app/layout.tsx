import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        {/* Aqui Ray: NÃO ESQUECE DO GRID AAAA */}
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="bg-red-300 px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
