import { inconsolata, lato, playfairDisplay } from './fonts'
import Header from '@/components/header/Header'
import ThemeContextProvider from '@/context/ThemeContextProvider'
import styles from '../styles/global.scss'
import Head from 'next/head'

export const metadata = {
  title: 'Joel Borofsky | Creative Developer',
  description:
    'Fullstack web app and website developer and designer based in the USA, with a stack that includes Nextjs, Nodejs, MongoDB, and other associated technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${playfairDisplay.variable} ${inconsolata.variable} ${lato.variable}`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='Joel Borofsky' />
    
      
      </Head>
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
