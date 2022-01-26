import React, { createContext, useEffect, useState } from 'react';


const initTheme = () => {
  if(typeof window != 'undefined' && window?.localStorage) {
    const localTheme = window.localStorage.getItem('theme')
    if(typeof localTheme === 'string') {
      return localTheme
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'
  }
  return 'dark'
}

export const ThemeContext = createContext();

export const ThemeProvider = ({initialTheme, children}) => {

  const [theme, setTheme] = useState(initTheme);

  const checkTheme = (existing) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', existing)
    localStorage.setItem('theme', existing);
  }

  if(initialTheme) {
    checkTheme(initialTheme)
  }

  useEffect(() => {
    checkTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
