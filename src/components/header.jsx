import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Hidden,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Container,
} from "@material-ui/core"

import { Home, Menu } from "@material-ui/icons"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 250,
  },
  linkText: {
    textDecoration: "none",
    color: `black`,
  },
})

const siteLinks = [
  { title: `ABOUT US`, path: `/about-us` },
  { title: `PRODUCT`, path: `/product` },
  { title: `CONTACT US`, path: `/contact-us` },
  { title: `FAQ`, path: `/faq` },
]

const Header = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    right: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideDrawer = side => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-labelledby="side drawer">
        {siteLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  const MainNav = (
    <List
      component="nav"
      aria-labelledby="main navigation"
      style={{ display: `flex` }}
    >
      {siteLinks.map(({ title, path }) => (
        <Link to={path} key={title} className={classes.linkText}>
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  )

  return (
    <header className={classes.root}>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar style={{ justifyContent: `space-between` }}>
            <Link to="/">
              <IconButton
                edge="start"
                aria-label="home"
                className={classes.title}
              >
                <Home fontSize="large" />
              </IconButton>
            </Link>

            <Hidden mdUp>
              <IconButton
                edge="end"
                aria-label="drawer menu"
                onClick={toggleDrawer("right", true)}
              >
                <Menu />
              </IconButton>
            </Hidden>

            <Hidden smDown>
              <nav>{MainNav}</nav>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      <nav aria-label="side">
        <Hidden mdUp>
          <SwipeableDrawer
            anchor="right"
            open={state.right}
            onOpen={toggleDrawer("right", true)}
            onClose={toggleDrawer("right", false)}
          >
            {sideDrawer("right")}
          </SwipeableDrawer>
        </Hidden>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
