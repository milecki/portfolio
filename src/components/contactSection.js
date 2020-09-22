import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Container from "../components/container"
import SectionTitle from "./sectionTitle"
import ContactForm from "./contactForm"
import Img from "gatsby-image"

const StyledSection = styled.section`
  font-size: 1rem;
  padding-bottom: 3.125em;
  padding-top: 6.875em;

  @media screen and (min-width: 996px) {
    margin-top: 2.125em;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 6.25em;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -0.625em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "checking-mail.png" }) {
        childImageSharp {
          fluid(maxWidth: 515) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return <Img fluid={data.contactImage.childImageSharp.fluid} />
}

const ContactImage = styled.div`
  font-size: 1em;
  width: 100%;
  max-width: 25em;
  margin: 0 auto;

  img {
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    padding: 0 7.5em;
    max-width: initial;
    margin: initial;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 0 0 0 1.875em;
    max-width: 26.875em;
  }
`

const ContactSection = () => {
  const intl = useIntl()
  return (
    <Container>
      <StyledSection id="contact">
        <SectionTitle>
          {intl.formatMessage({ id: "headings.contact" })}
        </SectionTitle>
        <Wrapper>
          <ContactForm />
          <ContactImage>
            <Image />
          </ContactImage>
        </Wrapper>
      </StyledSection>
    </Container>
  )
}

export default ContactSection
