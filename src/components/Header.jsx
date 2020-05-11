import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab,
} from "@material-ui/core"
import { Home, KeyboardArrowUp } from "@material-ui/icons"
import * as React from "react"
import HideOnScroll from "./HideOnScroll"
import SideDrawer from "./SideDrawer"
import BackToTop from "./BackToTop"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: theme.palette.common.white,
  },
  homeIconColor: {
    color: theme.palette.common.white,
  },
  buttonColor: {
    color: theme.palette.warning.main,
  },
}))

const navLinks = [
  { title: `Caesarstone`, path: `/caesarstone` },
  { title: `OEM`, path: `/oem-quartz-stone` },
]

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar component="nav">
            <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
              <IconButton aria-label="home">
                <Link to="/" className={classes.homeIconColor}>
                  <Home fontSize="large" />
                </Link>
              </IconButton>

              <Hidden smDown>
                <List
                  component="nav"
                  aria-labelledby="main navigation"
                  className={classes.navListDisplayFlex}
                >
                  {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Hidden>
              <Hidden mdUp>
                <SideDrawer navLinks={navLinks} />
              </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab
          className={classes.buttonColor}
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  )
}

export default Header
