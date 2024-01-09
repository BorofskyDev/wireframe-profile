import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joel Borofsky | Creative Developer',
  description:
    'Fullstack web app and website developer and designer based in the USA, with a stack that includes Nextjs, Nodejs, MongoDB, and other associated technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
