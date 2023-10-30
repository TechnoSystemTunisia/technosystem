"use client"

import { ThemeProvider } from "next-themes"
import { Toaster } from "./ui/toaster"

interface Props {
  children: React.ReactNode
}

const ThemeWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class">
      <main>{children}</main>
      <Toaster />
    </ThemeProvider>)
}

export default ThemeWrapper
