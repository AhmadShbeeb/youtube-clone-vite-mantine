import React from 'react'
import App from './App'
import './index.css'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useState } from 'react'

export const AppConfig = () => {
  const [colorScheme, setColorScheme] = useState('light')
  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
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
        <App />
        {/* </React.StrictMode> */}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
