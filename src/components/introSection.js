import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Container from "../components/container"
import Img from "gatsby-image"

const Intro = styled.section`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 7.25em;
  font-family: "Josefin Sans", sans-serif;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding-top: 8.75em;
  }
`

const IntroText = styled.p`
  font-size: 1.5em;
  display: inline-block;
  width: 100%;
  margin-bottom: 1.6666666667em;
  text-align: left;
  line-height: 1.4;
  z-index: 2;

  @media screen and (min-width: 600px) {
    font-size: 1.625em;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
    padding-right: 1.1538461538em;
  }

  @media screen and (min-width: 996px) {
    font-size: 2em;
  }
`
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      introImage: file(relativePath: { eq: "sitting-at-desk.png" }) {
        childImageSharp {
          fluid(maxWidth: 515) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return <Img fluid={data.introImage.childImageSharp.fluid} />
}

const IntroImage = styled.div`
  font-size: 1em;
  width: 100%;

  img {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    padding: 0 3.75em;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 0 0 0 1.875em;
  }
`

const IntroSection = ({ intl }) => {
  return (
    <Container>
      <Intro>
        <IntroText>{intl.formatMessage({ id: "intro" })}</IntroText>
        <IntroImage>
          <Image />
        </IntroImage>
      </Intro>
    </Container>
  )
}

export default injectIntl(IntroSection)
