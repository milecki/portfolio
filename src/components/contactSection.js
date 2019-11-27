import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import SectionTitle from "./sectionTitle"
import ContactForm from "./contactForm"
import mailbox from "../images/2.2.png"

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

const ContactImage = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  img {
    width: 100%;
    max-width: 25em;
  }

  @media screen and (min-width: 600px) {
    padding: 0 7.5em;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 0 0 0 1.875em;
  }
`

const ContactSection = () => {
  return (
    <Container>
      <StyledSection id="contact">
        <SectionTitle>Kontakt</SectionTitle>
        <Wrapper>
          <ContactForm />
          <ContactImage>
            <img src={mailbox} alt="" />
          </ContactImage>
        </Wrapper>
      </StyledSection>
    </Container>
  )
}

export default ContactSection
