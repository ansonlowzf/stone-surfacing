import React, { useState } from "react"
import BackToTop from "../components/BackToTop"
import HideHeaderOnScroll from "../components/HideHeaderOnScroll"
import {
  AppBar,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Fab,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Home, Menu, KeyboardArrowUp } from "@material-ui/icons"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  navbarSpace: {
    justifyContent: `space-between`,
  },
  list: {
    width: 250,
  },
  navLinkFlex: {
    display: "flex",
  },
  mainLinkText: {
    textDecoration: "none",
    color: `white`,
  },
  linkText: {
    textDecoration: "none",
  },
  drawerText: {
    color: theme.palette.primary.main,
  },
}))

const NavLinks = [
  { title: `CAESARSTONE`, path: `/caesarstone` },
  { title: `OEM QUARTZ STONE`, path: `/quartz stone` },
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

  const drawer = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-label="side drawer">
        {NavLinks.map(({ title, path }) => (
          <Link to={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} className={classes.drawerText} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )

  const MainNav = (
    <List component="nav" aria-label="main" className={classes.navLinkFlex}>
      {NavLinks.map(({ title, path }) => (
        <Link to={path} key={title} className={classes.mainLinkText}>
          <ListItem button>
            <ListItemText primary={title} />
          </ListItem>
        </Link>
      ))}
    </List>
  )

  return (
    <>
      <div className={classes.root}>
        <HideHeaderOnScroll>
          <AppBar>
            <Container maxWidth="lg">
              <Toolbar component="nav" className={classes.navbarSpace}>
                <Link to="/">
                  <IconButton>
                    <Home fontSize="large" style={{ color: `white` }} />
                  </IconButton>
                </Link>

                <Hidden mdUp>
                  <IconButton
                    aria-label="open drawer menu"
                    edge="end"
                    onClick={toggleDrawer("right", true)}
                  >
                    <Menu style={{ color: `white` }} />
                  </IconButton>
                </Hidden>
                {/* ====== Hide Main Navigation on tablet & mobile ====== */}
                <Hidden smDown>{MainNav}</Hidden>
                {/* ====== End - Hide Top Navigation on tablet & mobile ====== */}
              </Toolbar>
            </Container>
          </AppBar>
        </HideHeaderOnScroll>
        <Toolbar id="back-to-top-anchor" />
      </div>

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>

      <Hidden mdUp>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {drawer("right")}
        </Drawer>
      </Hidden>
    </>
  )
}

export default Header
