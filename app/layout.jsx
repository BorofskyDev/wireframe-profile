import { inconsolata, lato } from './fonts'
import Header from '@/components/header/Header'
import ThemeContextProvider from '@/context/ThemeContextProvider'

export const metadata = {
  title: 'Joel Borofsky | Creative Developer',
  description:
    'Fullstack web app and website developer and designer based in the USA, with a stack that includes Nextjs, Nodejs, MongoDB, and other associated technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inconsolata.variable} ${lato.variable}`}>
      <body>
        <ThemeContextProvider>
          <header>
            <Header />
          </header>
          <main>{children}</main>

          <footer>{/* [footer] */}</footer>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
