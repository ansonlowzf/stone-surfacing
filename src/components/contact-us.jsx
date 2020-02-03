import React from "react"

import { Divider, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Business, Phone, WhatsApp, MailOutline } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  bottomMargin: {
    marginBottom: `3em`,
  },
  sectionMarginBottom: {
    marginBottom: `15em`,
  },
  iconButton: {
    marginBottom: theme.spacing(1),
  },
  iconMarginRight: {
    marginRight: theme.spacing(3),
  },
  contactSectionMarginBottom: {
    marginBottom: theme.spacing(7),
  },
}))

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

      <Grid item xs={10} className={classes.iconButton}>
        <Business fontSize="large" />
      </Grid>
      <Grid item xs={10} md={3} className={classes.contactSectionMarginBottom}>
        <Typography
          variant="h6"
          component="h3"
          align="center"
          style={{ fontWeight: 500 }}
        >
          {`Warehouse`}
        </Typography>
        <Typography variant="body1" component="p" align="center" gutterBottom>
          {`944E, Kampung Baru Sungai Buloh, 47000 Sungai Buloh, Selangor D.E`}
        </Typography>
      </Grid>

      <Grid item xs={10} className={classes.iconButton}>
        <Phone fontSize="large" className={classes.iconMarginRight} />
        <WhatsApp fontSize="large" />
      </Grid>
      <Grid item xs={10} md={3} className={classes.contactSectionMarginBottom}>
        <Typography variant="body1" component="p" align="center" gutterBottom>
          {`Anson Low @ 016 - 82 62 314`}
        </Typography>
      </Grid>

      <Grid item xs={10} className={classes.iconButton}>
        <MailOutline fontSize="large" />
      </Grid>
      <Grid item xs={10} md={3}>
        <Typography variant="body1" component="p" align="center" gutterBottom>
          {`zhanfaye@gmail.com`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ContactUs
