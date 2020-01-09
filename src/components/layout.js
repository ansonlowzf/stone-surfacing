import React from "react"
import PropTypes from "prop-types"

import { CssBaseline } from "@material-ui/core"
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles"

import Header from "./header"
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
