import React from "react"
import { makeStyles } from "@material-ui/core"
import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: `100%`,
    padding: theme.spacing(3),
    textAlign: "center",
  },
  sectionMarginBottom: {
    marginBottom: `15em`,
  },
}))

const Product = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="md" className={classes.sectionMarginBottom}>
      <Grid container className={classes.root} spacing={3}>
        <Grid container item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Grid
              container
              className={classes.root}
              direction="column"
              justify="space-between"
              style={{ minHeight: `400px` }}
            >
              <Grid item style={{ width: `100%` }}>
                <Typography
                  component="h2"
                  variant="h4"
                  style={{ marginBottom: `0.3em` }}
                >
                  Caesarstone
                </Typography>
                <Divider />
              </Grid>
              <Grid item>
                <Typography component="p" variant="body1">
                  1. From USA
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  aria-label="caesarstone colour"
                  color="primary"
                  style={{
                    padding: `0.75em 1.5em`,
                    fontWeight: `bold`,
                    letterSpacing: `1.5px`,
                  }}
                >
                  See Colour
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid container item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Grid
              container
              className={classes.root}
              direction="column"
              justify="space-between"
              style={{ minHeight: `400px` }}
            >
              <Grid item>
                <Typography
                  component="h2"
                  variant="h4"
                  style={{ marginBottom: `0.3em` }}
                >
                  OEM Quartz Stone
                </Typography>
                <Divider />
              </Grid>
              <Grid item>
                {" "}
                <Typography component="p" variant="body1">
                  <ol>
                    <li>Import from China</li>
                    <li>Genuine Quartz</li>
                    <li>Contains 83-93% of Quartz</li>
                    <li>High End Resin</li>
                    <li></li>
                  </ol>
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  aria-label="caesarstone colour"
                  color="primary"
                  style={{
                    padding: `0.75em 1.5em`,
                    fontWeight: `bold`,
                    letterSpacing: `1.5px`,
                  }}
                >
                  See Colour
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Product
