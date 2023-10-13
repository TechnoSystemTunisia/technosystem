import ThemeWrapper from '@/components/ThemeWrapper'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Techno System Tunisie',
  description: "Entreprise spécialisée Installation courant faible et systeme d'alarme",
/*   icons: {
    icon: '/techno-system-logo-square.png',
    shortcut: '/techno-system-logo-square.png',
    apple: '/techno-system-logo-square.png',
    other: {
      rel: 'tstunisia-icon',
      url: '/techno-system-logo-square.png',
    },
  }, */
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
