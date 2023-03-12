import type { AppProps } from 'next/app'
import "@/scss/globals.scss";
import { PopupProvider } from '@/context/popup';
import { AuthProvider } from '@/context/auth';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <AuthProvider>
        <PopupProvider>
          <Component {...pageProps} />
        </PopupProvider>
      </AuthProvider>
    </>
  )
}
