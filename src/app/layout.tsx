import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'tran le, software engineer',
  description:
    'Full-stack software engineer. Designs and ships web apps end-to-end. Based in the Pacific Northwest.',
  metadataBase: new URL('https://tranle.dev'),
  openGraph: {
    title: 'tran le, software engineer',
    description: 'Full-stack software engineer. Building milestone. Based in Seattle.',
    url: 'https://tranle.dev',
    siteName: 'tran le',
    locale: 'en_US',
    type: 'website',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  )
}
