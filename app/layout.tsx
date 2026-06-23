import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = 'https://mgsignage.site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MG Signage | Signage, Branding & Fabrication in Dehradun',
    template: '%s | MG Signage',
  },
  description:
    'MG Signage offers complete indoor and outdoor branding solutions in Dehradun, Uttarakhand. LED letter boards, glow sign boards, ACP panelling, fabrication and pan-India project execution since 2016.',
  keywords: [
    'signage Dehradun',
    'glow sign board Dehradun',
    'acrylic letter board',
    'SS letter board',
    'ACP panelling',
    'outdoor branding Uttarakhand',
    'LED screen signage',
    'MG Signage',
  ],
  authors: [{ name: 'MG Signage' }],
  generator: 'v0.app',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'MG Signage',
    title: 'MG Signage | Signage That Makes Your Brand Visible',
    description:
      'Complete indoor and outdoor branding solutions in Dehradun. Fabrication, installation and execution of signage projects across India since 2016.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MG Signage | Signage That Makes Your Brand Visible',
    description:
      'Complete indoor and outdoor branding solutions in Dehradun, Uttarakhand since 2016.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${manrope.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
