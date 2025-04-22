import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './componenets/Navbar'
import { Footer } from './componenets/Footer'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Divij Patel | Portfolio',
  description: 'Personal portfolio of John Doe, Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNodex
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <Providers>
          <Navbar/>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}