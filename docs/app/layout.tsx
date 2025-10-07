import { clsx } from '@litte/element/utils'
import type { Metadata } from 'next'
import { Bree_Serif, JetBrains_Mono, Mona_Sans } from 'next/font/google'

// Load the application stylesheets and themes
import '@litte/themes/fresh/bundle.min.css'

import './globals.css'

const fontSans = Mona_Sans({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] })
const fontHeading = Bree_Serif({ variable: '--font-heading', subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'UI component library for modern web developers - Litte',
  description: `Beautifully designed UI components for flexibility and modern web developers - built with Lit: simple, fast, web components.`,
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-lt-theme="fresh" data-lt-scheme="dark" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicons/icon-512.png" sizes="512x512" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" sizes="any" />
      </head>
      <body className={clsx(fontSans.variable, fontMono.variable, fontHeading.variable)}>
        {children}
      </body>
    </html>
  )
}
