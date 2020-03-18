import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useScrollTrigger, Zoom } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(7),
    right: theme.spacing(7),
    zIndex: 999,
  },
}))

const BackToTop = ({ children }) => {
  const classes = useStyles()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

export default BackToTop
