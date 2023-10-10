"use client"

import { ThemeProvider } from "next-themes"

interface Props {
  children: React.ReactNode
}

const ThemeWrapper = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default ThemeWrapper
