import React from "react"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import { Button, Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  sectionMarginBottom: {
    marginBottom: theme.spacing(12),
  },
  heroFilterLayer: {
    width: `100%`,
    height: `100%`,
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
  },
  titleText: {
    color: theme.palette.common.white,
  },
  subtitleText: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
  },
  linkText: {
    textDecoration: `none`,
  },
  buttonColor: {
    backgroundColor: theme.palette.warning.main,
  },
  buttonText: {
    padding: `0.75em 1.5em`,
    fontWeight: `bold`,
    letterSpacing: `1.5px`,
  },
}))

const Hero = ({ title, subtitle, buttonName, imageUrl }) => {
  const classes = useStyles()

  return (
    <div className={classes.sectionMarginBottom}>
      <BackgroundImage
        Tag="section"
        fluid={imageUrl}
        style={{
          backgrounPosition: `center center`,
          backgroundSize: `cover`,
          height: `calc(100vh - 64px)`,
        }}
      >
        <Grid
          className={classes.heroFilterLayer}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item style={{ padding: `1em` }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className={classes.titleText}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              component="p"
              gutterBottom
              className={classes.subtitleText}
            >
              {subtitle}
            </Typography>
            <Link to="/product/mixed-flower-honey" className={classes.linkText}>
              <Button
                variant="contained"
                aria-label="product page"
                size="large"
                className={`${classes.buttonText} ${classes.buttonColor}`}
              >
                {buttonName} &rarr;
              </Button>
            </Link>
          </Grid>
        </Grid>
      </BackgroundImage>
    </div>
  )
}

export default Hero
