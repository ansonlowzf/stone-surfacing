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
          {`XYZ Stone is a stone slab trading company. We import stone slab from China and supply to stone's mansion, fabricator and factory in Malaysia. OEM are welcome`}
        </Typography>
        <br />
        <Typography variant="body1" component="p" gutterBottom>
          {`With more than 800 slabs in stock. Please visit our warehouse to choose the colour your customer is looking for. `}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutUs
