import ThemeWrapper from '@/components/ThemeWrapper'
import './globals.css'
import { Roboto, Poppins } from 'next/font/google'
import { siteMetadata } from '@/lib/siteMetadata';

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  keywords: {
    default: ['alarme', 'instrusion', 'camera', 'surveillance', 'courant faible', 'courant fort', 'barrière infra rouge', 'installation', 'fourniture', 'électrique', 'informatique', "point d'accès", "controle d'accès", 'techno system', 'ts tunisia'],
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    //images: [siteMetadata.socialBanner],
    locale: "tn_TN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    //images: [siteMetadata.socialBanner],
  },
};

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
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  )
}
