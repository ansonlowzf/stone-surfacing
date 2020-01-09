import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  styleFooter: {
    height: `30vh`,
    background: theme.palette.primary.main,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  textColor: {
    color: theme.palette.common.white,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.styleFooter}>
      <Typography variant="body1" component="p" className={classes.textColor}>
        © 2013 - {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}

export default Footer
