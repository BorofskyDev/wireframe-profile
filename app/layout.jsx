import { inconsolata, lato } from "./fonts"


export const metadata = {
  title: 'Joel Borofsky | Creative Developer',
  description:
    'Fullstack web app and website developer and designer based in the USA, with a stack that includes Nextjs, Nodejs, MongoDB, and other associated technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inconsolata.variable} ${lato.variable}`}>
      <body >{children}</body>
    </html>
  )
}
