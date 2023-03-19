import './globals.css'
import type { Metadata } from 'next'

// Importinga nice ass font
import { Changa } from 'next/font/google'

export const metadata: Metadata = {
  title: '😽BootyClapSweat',
  description: '😽Snort'
}

// Setting the font 

const Ch_Ng = Changa({
  subsets: ["latin"],
  weight: ["200", "300"],
  style: ["normal"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Ch_Ng.className}>
        {children}
      </body>
    </html>
  )
}
