import * as React from "react"
import { useState, useEffect, useContext } from "react"

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

import { ThemeContext } from "../themeProvider"

const ThemeToggle = props => {

  const [colorMode, toggleColorMode ] = useState('dark')
  const {theme, setTheme} = useContext(ThemeContext)

  const changeColorMode = () => {
    const mode = theme == 'dark' ? 'light' : 'dark';
    setTheme(mode)
  }
  return (
    <span onClick={changeColorMode} className="text-secondary">
      {
        theme === "dark" ? 
          <IoSunnyOutline className=" h-6 w-6"/> : 
          <IoMoonOutline className=" h-6 w-6 rotate-12"/>
      }
    </span>
  )
}

export default ThemeToggle
