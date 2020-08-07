import React from 'react'
import Layout from 'components/Layout'
import { ThemeContextProvider } from 'contexts/themeContext'

const App: React.FC = () => (
  <ThemeContextProvider>
    <Layout />
  </ThemeContextProvider>
)

export default App
