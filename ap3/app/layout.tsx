import './globals.css'

// Importinga nice ass font
import { Changa } from 'next/font/google'

export const metadata = {
  title: 'BootyClapSweat',
  description: 'Snort'
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
    <html lang="en" className={Ch_Ng.className}>
      <body>{children}</body>
    </html>
  )
}
