import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import AboutUs from "../components/about-us"
import Product from "../components/products"
import ContactUs from "../components/contact-us"
import Faq from "../components/faq"

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
        title={`Wholesales Stone Slab in Malaysia`}
        subtitle={`Supplying Quartz Stone, Granite & Marble`}
        buttonName={`Explore`}
        imageUrl={data.placeholderImage.childImageSharp.fluid}
      />

      <AboutUs />

      {/* Video of factory showing slab, walking of factory */}
      <Hero
        // title={`Stone Surfacing`}
        // subtitle={`Supply of Stone Slab`}
        // buttonName={`Explore`}
        imageUrl={data.placeholderImage.childImageSharp.fluid}
      />

      <Product />

      <ContactUs />

      <Faq />
    </Layout>
  )
}

export default IndexPage
