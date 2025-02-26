import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/store/provider'
import { plusJakartaSans } from "./fonts"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${plusJakartaSans.variable}`}>
      <body className={`${inter.className} h-full ${plusJakartaSans.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
