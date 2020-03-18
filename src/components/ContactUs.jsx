import React from "react"

import { Container, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Business, WhatsApp, MailOutline } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  gridMarginBottom: {
    marginBottom: `3em`,
  },
  iconButton: {
    marginBottom: theme.spacing(1),
  },
  contactSectionMarginBottom: {
    marginBottom: theme.spacing(7),
  },
}))

const ContactUs = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="xs" className="section-margin--bottom">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.gridMarginBottom}
      >
        <Grid item xs>
          <Business fontSize="large" />
        </Grid>
        <Grid item xs>
          <Typography component="p" variant="body1" align="center">
            {`944E, Kampung Baru Sungai Buloh, 47000 Sungai Buloh, Selangor D.E`}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.gridMarginBottom}
      >
        <Grid item xs>
          <WhatsApp fontSize="large" />
        </Grid>
        <Grid item xs>
          <Typography variant="body1" component="p" align="center">
            {`Anson Low @ 016 - 82 62 314`}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.gridMarginBottom}
      >
        <Grid item xs>
          <MailOutline fontSize="large" />
        </Grid>
        <Grid item xs>
          <Typography variant="body1" component="p" align="center">
            {`zhanfaye@gmail.com`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactUs
