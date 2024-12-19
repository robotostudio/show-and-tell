import { Mona_Sans as FontSans } from 'next/font/google'
import { Caveat } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontHandwritten = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
})

