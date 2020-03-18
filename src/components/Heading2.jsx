import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles({
  bottomMargin: {
    marginBottom: `3em`,
  },
  underlineText: {
    borderBottom: `2px solid #ddd`,
    paddingBottom: `0.375em`,
  },
})

const Heading2 = ({ title, path }) => {
  const classes = useStyles()

  return (
    <Grid container justify="center">
      <Grid
        container
        item
        justify="center"
        xs={11}
        md={6}
        className={classes.bottomMargin}
      >
        <Typography
          variant="h3"
          component="h2"
          align="center"
          id={path}
          className={classes.underlineText}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Heading2
