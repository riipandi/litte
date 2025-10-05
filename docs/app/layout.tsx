import type { Metadata } from 'next'
import { JetBrains_Mono, Mona_Sans } from 'next/font/google'
import './globals.css'

const fontSans = Mona_Sans({ variable: '--font-sans', subsets: ['latin'] })
const fontMono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Litte',
  description: 'UI components powered by Lit',
}

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" data-lt-theme="default" data-lt-color-mode="light" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable}`}>{children}</body>
    </html>
  )
}
