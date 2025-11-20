'use client'
import { ThemeProvider } from "next-themes"
import Navbar from "./Navbar"
import { Suspense } from "react"

function ClientLayout({children}) {
  return (
    <Suspense fallback={<div />}>

    <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
        <Navbar/>
        {children}
    </ThemeProvider>
    </Suspense>
  )
}

export default ClientLayout;