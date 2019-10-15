import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import SectionTitle from "../components/sectionTitle"

const StyledSection = styled.section`
  padding-bottom: 50px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  font-family: "Josefin Sans", sans-serif;
  margin: 0 auto;
`

const StyledLabel = styled.label`
  margin: 20px 0;
  position: relative;
  /* display: inline-block; */
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
    border-bottom: 1px solid #505bda;
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

const StyledButton = styled.button`
  width: 100%;
  margin: 30px auto 0;
  padding: 15px 20px;
  border-radius: 25px;
  background-color: #505bda;
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
`

const Contact = () => {
  return (
    <Container>
      <StyledSection>
        <SectionTitle>Kontakt</SectionTitle>
        <StyledForm>
          <StyledLabel>
            <StyledInput type="text" placeholder=" " />
            <StyledSpan>Imię i nazwisko</StyledSpan>
          </StyledLabel>
          <StyledLabel>
            <StyledInput type="email" placeholder=" " />
            <StyledSpan>Adres email</StyledSpan>
          </StyledLabel>
          <StyledLabel>
            <StyledTextArea name="" id="" placeholder=" "></StyledTextArea>
            <StyledSpan>Treść wiadomości</StyledSpan>
          </StyledLabel>
          <StyledButton type="submit">Wyślij</StyledButton>
        </StyledForm>
      </StyledSection>
    </Container>
  )
}

export default Contact
