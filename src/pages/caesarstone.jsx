import { Container } from "@material-ui/core"
import React from "react"
import DisplayStone from "../components/DisplayStone"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Caesarstone Slab" />
    <Container maxWidth="lg">
      <DisplayStone />
    </Container>
  </Layout>
)

export default SecondPage
