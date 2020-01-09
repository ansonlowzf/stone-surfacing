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

const ContactUs = () => {
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
          Contact Us
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={10} md={3}>
        <Typography variant="p" component="body1" gutterBottom>
          {`013 333 3333`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ContactUs
