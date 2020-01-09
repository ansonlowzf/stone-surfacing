import React from "react"
import { makeStyles } from "@material-ui/core"
import { Container, Grid, Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flexBasis: 300,
    height: 400,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  sectionMarginBottom: {
    marginBottom: `15em`,
  },
}))

const Product = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.sectionMarginBottom}>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Product
