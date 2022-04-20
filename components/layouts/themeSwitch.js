import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Sun, Moon } from 'react-feather';

const ThemeSwitch = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {
        mounted && (theme === 'dark' || resolvedTheme === 'dark') ? 
          <Moon size={20} /> : <Sun  size={20}/>
      }
    </button>
  )
}

export default ThemeSwitch