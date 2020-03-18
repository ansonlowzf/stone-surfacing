import React from "react"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
  Typography,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons/"

import { questionAnswers } from "../question-answer"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  titleMargin: {
    marginTop: `1em`,
    marginBottom: `1em`,
  },
  sectionMarginBottom: {
    marginBottom: `15em`,
  },
}))

const Faq = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="FAQ" />
      <Grid container justify="center" className={classes.sectionMarginBottom}>
        <Grid item xs={11} md={5}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            className={classes.titleMargin}
          >
            {`Frequently Ask Question (FAQ)`}
          </Typography>
          {questionAnswers.map(({ question, answer }) => (
            <ExpansionPanel key={question}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography className={classes.heading}>{question}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>{answer}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Faq
