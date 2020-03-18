import React from "react"
import "./layout.css"

import { CssBaseline } from "@material-ui/core"
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import Header from "./Header"
import Footer from "./Footer"

let theme = createMuiTheme({
  typography: {
    h2: {
      fontWeight: 500,
    },
  },
})

theme = responsiveFontSizes(theme)

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
