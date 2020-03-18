import React from "react"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import { Button, Grid, Typography } from "@material-ui/core"

const Hero = ({ title, subtitle, buttonName, imageUrl }) => {
  return (
    <div className="section-margin--bottom">
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
          style={{
            width: `100%`,
            height: `100%`,
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
          }}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item style={{ padding: `1em` }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              style={{ color: `white` }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              component="p"
              gutterBottom
              style={{ color: `white`, marginBottom: `1em` }}
            >
              {subtitle}
            </Typography>
            <Link
              to="/product/mixed-flower-honey"
              style={{ textDecoration: `none` }}
            >
              <Button
                variant="contained"
                aria-label="product page"
                color="secondary"
                size="large"
                style={{
                  padding: `0.75em 1.5em`,
                  fontWeight: `bold`,
                  letterSpacing: `1.5px`,
                }}
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
