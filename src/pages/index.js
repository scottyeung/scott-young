import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Scene from "../components/scene"

const IndexPage = ({ data: { home } }) => (
  <Layout>
    <Scene />
    <Img fluid={home.cheekyLogo.fluid} className="home__image" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
        cheekyLogo {
          fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
