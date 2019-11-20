import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import SectionTitle from "./sectionTitle"
import mailbox from "../images/2.2.png"

const StyledSection = styled.section`
  padding-bottom: 100px;
  padding-top: 100px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 auto 0;
  width: 50%;
  padding: 0 30px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ContactImage = styled.div`
  width: 50%;
  padding: 0 100px;

  img {
    width: 100%;
  }
`

const StyledLabel = styled.label`
  margin: 20px 0;
  position: relative;
`

const SuperLabel = styled.label`
  display: none;
`

const StyledSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 1px;
  pointer-events: none;
  opacity: 0.5;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(51, 51, 51, 0.5);
  color: #333;
  font-size: 16px;

  &:focus {
    border-bottom: 1px solid #55198c;
    outline: none;
    opacity: 1;
  }
  padding: 10px 1px;

  &:focus + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-10px);
  }

  &:not(:placeholder-shown) + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-10px);
  }
`

const StyledTextArea = styled.textarea`
  display: block;
  margin-top: 10px;
  width: 100%;
  height: 80px;
  border: none;
  border-bottom: 1px solid rgba(51, 51, 51, 0.5);
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #55198c;
  }

  &:focus + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-10px);
  }

  &:not(:placeholder-shown) + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-10px);
  }
`

const SubmitButton = styled.input`
  width: 100%;
  margin: 40px auto 0;
  padding: 15px 20px;
  border-radius: 25px;
  background-color: #55198c;
  border: none;
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`

const Contact = () => {
  return (
    <Container>
      <StyledSection id="contact">
        <SectionTitle>Kontakt</SectionTitle>
        <Wrapper>
          <StyledForm
            action="https://formspree.io/michal@kulecki.me"
            method="post"
          >
            <input type="hidden" name="_language" value="pl" />
            <StyledLabel>
              <StyledInput
                type="text"
                name="name"
                placeholder=" "
                required="required"
              />
              <StyledSpan>Imię i nazwisko</StyledSpan>
            </StyledLabel>
            <StyledLabel>
              <StyledInput
                type="email"
                name="_replyto"
                placeholder=" "
                required="required"
              />
              <StyledSpan>Adres email</StyledSpan>
            </StyledLabel>
            <SuperLabel>
              <StyledInput type="text" name="_gotcha" placeholder=" " />
              <StyledSpan>Dodatkowe informacje</StyledSpan>
            </SuperLabel>
            <StyledLabel>
              <StyledTextArea
                name="message"
                placeholder=" "
                required="required"
              ></StyledTextArea>
              <StyledSpan>Treść wiadomości</StyledSpan>
            </StyledLabel>
            <SubmitButton type="submit" value="Wyślij"></SubmitButton>
          </StyledForm>
          <ContactImage>
            <img src={mailbox} alt="" />
          </ContactImage>
        </Wrapper>
      </StyledSection>
    </Container>
  )
}

export default Contact
