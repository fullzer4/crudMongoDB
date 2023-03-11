import type { AppProps } from 'next/app'
import "@/scss/globals.scss";
import { PopupProvider } from '@/context/popup';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <PopupProvider>
        <Component {...pageProps} />
      </PopupProvider>
    </>
  )
}
