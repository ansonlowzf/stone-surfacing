import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Product from "../components/Products"
import ContactUs from "../components/ContactUs"
import Faq from "../components/Faq"
import Heading2 from "../components/Heading2"
import { Container, Typography } from "@material-ui/core"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "slab photo 1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      {/* factory entrance photo */}
      <Hero
        title={`Wholesales Quartz Stone Slab in Malaysia`}
        subtitle={`More than 82 colours available`}
        buttonName={`Explore`}
        imageUrl={data.placeholderImage.childImageSharp.fluid}
      />

      <Heading2 title="About Us" />
      <Container maxWidth="xs" className="section-margin--bottom">
        <Typography component="p" variant="body1" paragraph>
          {`XYZ Stone is a stone slab trading company. We import stone slab from USA, China and supply to stone's mansion, stone's fabricator and stone's factory in Malaysia.`}
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          {`With more than 800 slabs in stock. Please visit our warehouse to choose the colours your customer are looking for.`}
        </Typography>
        <Typography component="p" variant="h6">
          {`Welcome to OEM and develop your own quartz stone brand`}
        </Typography>
      </Container>

      {/* Video of factory showing slab, walking of factory */}
      <Hero
        // title={`Stone Surfacing`}
        // subtitle={`Supply of Stone Slab`}
        // buttonName={`Explore`}
        imageUrl={data.placeholderImage.childImageSharp.fluid}
      />

      <Product />

      <Heading2 title="Contact Us" />
      <ContactUs />

      <Faq />
    </Layout>
  )
}

export default IndexPage
