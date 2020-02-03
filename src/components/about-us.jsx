import React from "react"

import { Divider, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  bottomMargin: {
    marginBottom: `3em`,
  },
  sectionMarginBottom: {
    marginBottom: `15em`,
  },
})

const AboutUs = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.sectionMarginBottom}
    >
      <Grid item className={classes.bottomMargin}>
        <Typography variant="h3" component="h2" gutterBottom>
          About Us
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={10} md={3}>
        <Typography variant="body1" component="p" gutterBottom>
          {`XYZ Stone Marketing is a stone surfacing supply company. We supply quartz stone (AKA quartz surface), marble, and granite`}
        </Typography>
        <br />
        <Typography variant="body1" component="p" gutterBottom>
          {`XYZ Stone Marketing is a stone surfacing supply company. We supply quartz stone (AKA quartz surface), marble, and granite`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutUs
