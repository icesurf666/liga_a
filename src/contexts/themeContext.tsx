import React, { createContext, useState } from 'react'

const ThemeContext = createContext<IThemeContext>({
  darkMode: false,
  setDarkMode: () => {},
})

const Provider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeContextProvider = Provider

export default ThemeContext
