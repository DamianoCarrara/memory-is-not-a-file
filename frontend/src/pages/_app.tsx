import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps as NextAppProps } from 'next/app'
import { useEffect } from 'react'
import { ThemeProvider } from 'react-jss'
import { appWithTranslation } from 'next-i18next'
import { theme } from '../utils/theme'
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles'
import { useStore } from '../utils/store'
import { Languages } from '../types'

const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

interface PageProps {
  locale: Languages
}

const MyApp = ({ Component, pageProps }: AppProps<PageProps>) => {
  const { locale } = pageProps
  const setLocale = useStore((store) => store.setLocale)
  useEffect(() => {
    const style = document.getElementById('server-side-styles')

    if (style && style.parentNode) {
      style.parentNode.removeChild(style)
    }
  }, [])

  useEffect(() => {
    setLocale(locale)
  }, [locale, setLocale])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <QueryClientProvider client={queryClient}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </QueryClientProvider>
      </GlobalStyles>
    </ThemeProvider>
  )
}

export default appWithTranslation<AppProps>(MyApp)
