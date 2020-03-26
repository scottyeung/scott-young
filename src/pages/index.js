import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Scene from "../components/scene"

const IndexPage = ({ data: { home } }) => (
  <Layout>
    <Scene />
    <Img fluid={home.cheekyLogo.fluid} className="home__image" />
    <a href={home.externalLink} className="home__link">
      <Img fluid={home.bubble.fluid} className="home__image" />
    </a>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      externalLink
      cheekyLogo {
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bubble {
        fluid(imgixParams: { fm: "png", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
