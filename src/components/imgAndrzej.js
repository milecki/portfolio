import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "andrzej.png" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="" />
}
