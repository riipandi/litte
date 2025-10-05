import { clsx } from 'clsx'
import { IconoirProvider } from 'iconoir-react'
import type { Metadata } from 'next'
import { Bree_Serif, JetBrains_Mono, Mona_Sans } from 'next/font/google'
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
    <html lang="en" data-lt-theme="default" data-lt-color-mode="light" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="256x256" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={clsx(fontSans.variable, fontMono.variable, fontHeading.variable)}>
        <IconoirProvider
          iconProps={{
            color: 'currentColor',
            strokeWidth: 1.5,
            width: '1.5em',
            height: '1.5em',
          }}
        >
          {children}
        </IconoirProvider>
      </body>
    </html>
  )
}
