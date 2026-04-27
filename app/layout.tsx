import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IEEE CIS Bangalore Chapter | Computational Intelligence Society',
  description:
    'Official website of IEEE Computational Intelligence Society – Bangalore Chapter. Advancing the theory, design, and application of biologically and linguistically motivated computational paradigms.',
  keywords: [
    'IEEE', 'IEEE CIS', 'Computational Intelligence Society', 'Bangalore', 'Student Branch',
    'Machine Learning', 'Neural Networks', 'Fuzzy Systems', 'Evolutionary Computing',
  ],
  openGraph: {
    title: 'IEEE CIS Bangalore Chapter',
    description: 'Advancing Computational Intelligence in Bangalore',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-ieee-text-dark">
        {children}
      </body>
    </html>
  )
}
