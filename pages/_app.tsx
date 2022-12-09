import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const customFont = localFont({ src: "../public/fonts/MonaSans/Mona-Sans.woff2", display: "swap",})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={customFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
