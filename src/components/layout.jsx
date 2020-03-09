import React from "react"

import { CssBaseline } from "@material-ui/core"
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"

import Header from "./Header"
import Footer from "./footer.component"

let theme = createMuiTheme({
  typography: {
    h2: {
      fontWeight: 700,
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
