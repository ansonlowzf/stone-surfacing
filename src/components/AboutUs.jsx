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
          {`XYZ Stone is a stone slab trading company. We import stone slab from China and supply to stone's factory in Malaysia. Welcome to OEM and develop your stone brand.`}
        </Typography>
        <br />
        <Typography variant="body1" component="p" gutterBottom>
          {`We mainly import quartz stone with more than 1000 slabs and 80 colours in stock. Welcome to visit our warehouse to choose your favourite colour`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutUs
