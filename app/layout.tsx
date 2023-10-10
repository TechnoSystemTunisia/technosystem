import ThemeWrapper from '@/components/ThemeWrapper'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Techno System Tunisie',
  description: 'Entreprise specialiste Installation courant faible',
}

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400','700', '900'] 
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400','700', '900'] 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body className='min-h-screen w-full'>
      <ThemeWrapper>{children}</ThemeWrapper></body>
    </html>
  )
}
