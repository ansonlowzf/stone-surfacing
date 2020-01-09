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
        <Typography variant="p" component="body1" gutterBottom>
          {` Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          commodi explicabo nam ea saepe, amet necessitatibus ad cum optio
          adipisci perferendis at, veniam molestias? 
          
          Vitae sequi sint vero nemo
          aliquam. Repellendus aliquid illum veniam vitae officiis, porro
          distinctio? Ut odio accusantium, consequuntur quia laborum ad quos
          qui. Modi enim nesciunt qui nostrum eveniet ab, esse officiis
          necessitatibus ipsa eos recusandae. 
          
          Doloribus dignissimos minus sed
          maxime earum id fugit praesentium blanditiis, omnis quisquam tempore
          velit possimus eius odio porro corrupti iste rerum officiis nostrum
          quas aut repellendus voluptatem. Cum, animi cumque?`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AboutUs
