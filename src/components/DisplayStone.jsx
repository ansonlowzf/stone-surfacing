import { Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 900,
    marginBottom: `1em`,
  },
})

const DisplayStone = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "caesarstone-color/4033.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Grid
      container
      justify="center"
      className={classes.root}
      style={{ margin: `2em 0`, border: `1px solid #666` }}
    >
      <Grid item xs={12} md={8}>
        <Paper className={classes.paper}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" component="p" variant="body1">
          Caesarstone 3100 Jet Black
        </Typography>
      </Grid>
    </Grid>
  )
}

export default DisplayStone
