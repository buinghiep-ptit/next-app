import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models/common'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface AppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache
}

function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      }),
  )
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <SWRConfig
          value={{
            fetcher: url => axiosClient.get(url),
            shouldRetryOnError: false,
          }}
        > */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* </SWRConfig> */}
          </ThemeProvider>
        </CacheProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
