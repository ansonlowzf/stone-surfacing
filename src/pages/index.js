import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Product from "../components/products"
import ContactUs from "../components/contact-us"
import Faq from "../components/faq"
import Heading2 from "../components/Heading2"
import { Container, Typography } from "@material-ui/core"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ImageDraft.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
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
          {`XYZ Stone is a stone slab trading company. We import stone slab from China and supply to stone's mansion, fabricator and factory in Malaysia. OEM are welcome`}
        </Typography>
        <Typography variant="body1" component="p">
          {`With more than 800 slabs in stock. Please visit our warehouse to choose the colours your customer are looking for. `}
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
