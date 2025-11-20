"use client"

import { useState } from "react"

function ThemeSwitcher() {
    const [mode, setMode] = useState('light')
  return (
    <div>
    <button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {mode === 'light' ? 'Dark' : 'Light'}
    </button>
    </div>
  )
}

export default ThemeSwitcher;