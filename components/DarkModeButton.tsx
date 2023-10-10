"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
        }}
        className={`w-11 ring-2 ring-purple-600 h-6 bg-blue-200 rounded-full peer peer-checked:bg-slate-200 peer-checked:ring-indigo-500 peer-checked:after:translate-x-full ${
          resolvedTheme === "dark"
            ? "after:content-['🌘']"
            : "after:content-['🔆']"
        } after:absolute after:top-[2px] after:left-[2px] after:items-center after:flex after:justify-center ${
          resolvedTheme === "dark"
            ? "after:peer-checked:content-['🌘']"
            : "after:peer-checked:content-['🔆']"
        } after:rounded-full after:h-5 after:w-5 after:transition-all`}
      />
    </label>
  )
}

export default DarkModeButton
