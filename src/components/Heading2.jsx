import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import * as React from "react"

const useStyles = makeStyles(theme => ({
  bottomMargin: {
    marginBottom: theme.spacing(5),
  },
  underlineText: {
    borderBottom: `2px solid #ddd`,
    paddingBottom: theme.spacing(2),
  },
}))

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
