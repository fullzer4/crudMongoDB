import type { AppProps } from 'next/app'
import "@/scss/globals.scss";
import { PopupProvider } from '@/context/popup';
import { AuthProvider } from '@/context/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o token está presente no localStorage
    console.log("verificando")
    const token = localStorage.getItem('token');

    if (router.pathname === '/dashboard') {
      if (!token || token.length <= 4) {
        // Redireciona para a página inicial se não tiver um token válido
        router.push('/');
      }
    }
    
  });

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
