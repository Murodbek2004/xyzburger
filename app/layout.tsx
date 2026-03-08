import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'XYZ Burger — Burgerlar barcha avlodlar uchun',
  description: 'XYZ Burger — premium burgerlar, kombo, stripslar va souslar. Barcha avlodlar uchun.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/burger-icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.jpg',
        type: 'image/jpeg',
      },
    ],
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
