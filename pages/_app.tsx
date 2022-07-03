import '../styles/globals.css'
import { EmptyLayout } from '@/component/layout'
import { AppPropsWithLayout } from '@/models/common'
import { SWRConfig } from 'swr'
import axiosClient from 'apis/axios-client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from '@/utils'
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
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: url => axiosClient.get(url),
            shouldRetryOnError: false,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
