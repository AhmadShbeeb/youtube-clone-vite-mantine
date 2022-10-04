import React from 'react'
import App from './App'
import './index.css'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const AppConfig = () => {
  const [colorScheme, setColorScheme] = useState('light')
  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const twentyFourHoursInMs = 1000 * 60 * 60 * 24
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
      },
    },
  })
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {/* <React.StrictMode> */}
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        {/* </React.StrictMode> */}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
