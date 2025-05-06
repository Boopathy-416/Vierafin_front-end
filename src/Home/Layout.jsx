import React from "react"
import "./globals.css"
import { Toaster } from "./components/ui/toaster"
import { ThemeProvider } from "./components/theme-provider"

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
