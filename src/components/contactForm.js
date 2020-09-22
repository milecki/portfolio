import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

const StyledForm = styled.form`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 31.25em;
  margin: 0 auto 3.125em;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;

  @media screen and (min-width: 600px) {
    padding: 0 1.875em;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0;
    padding: 0 1.875em 0 0;
  }
`

const StyledLabel = styled.label`
  position: relative;
  margin: 1.25em 0;
`

const SuperLabel = styled.label`
  display: none;
`

const StyledSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.625em 0.0625em;
  pointer-events: none;
  opacity: 0.5;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
`

const StyledInput = styled.input`
  font-size: 1em;
  width: 100%;
  appearance: none;
  border: none;
  border-bottom: 0.0625em solid rgba(51, 51, 51, 0.5);
  border-radius: 0;
  color: #333;
  font-family: "Josefin Sans", sans-serif;
  opacity: 1;

  &:focus {
    border-bottom: 0.0625em solid #55198c;
    outline: none;
    opacity: 1;
  }
  padding: 0.625em 0.0625em;

  &:focus + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-0.5em);
  }

  &:not(:placeholder-shown) + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-0.5em);
  }
`

const StyledTextArea = styled.textarea`
  font-size: 1em;
  display: block;
  margin-top: 0.625em;
  width: 100%;
  height: 5em;
  appearance: none;
  border: none;
  border-bottom: 0.0625em solid rgba(51, 51, 51, 0.5);
  border-radius: 0;
  color: #333;
  font-family: "Josefin Sans", sans-serif;
  opacity: 1;

  &:focus {
    border-bottom: 0.0625em solid #55198c;
    outline: none;
  }

  &:focus + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-0.5em);
  }

  &:not(:placeholder-shown) + ${StyledSpan} {
    opacity: 1;
    transform: scale(0.875) translateY(-60%) translateX(-0.5em);
  }
`

const SubmitButton = styled.input`
  font-size: 1em;
  width: 100%;
  margin: 2.5em auto 0;
  padding: 0.9375em 1.25em;
  border: none;
  border-radius: 1.5625em;
  background-color: #55198c;
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in;
  appearance: none;

  &:active {
    outline: none;
  }
`

const ContactForm = () => {
  const intl = useIntl()
  return (
    <StyledForm action="https://formspree.io/michal@kulecki.me" method="post">
      <input type="hidden" name="_language" value="pl" />
      <StyledLabel>
        <StyledInput
          type="text"
          name="name"
          placeholder=" "
          required="required"
        />
        <StyledSpan>{intl.formatMessage({ id: "name_label" })}</StyledSpan>
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          type="email"
          name="_replyto"
          placeholder=" "
          required="required"
        />
        <StyledSpan>{intl.formatMessage({ id: "email_label" })}</StyledSpan>
      </StyledLabel>
      <SuperLabel>
        <StyledInput type="text" name="_gotcha" placeholder=" " />
        <StyledSpan>{intl.formatMessage({ id: "additional_info" })}</StyledSpan>
      </SuperLabel>
      <StyledLabel>
        <StyledTextArea
          name="message"
          placeholder=" "
          required="required"
        ></StyledTextArea>
        <StyledSpan>{intl.formatMessage({ id: "name_label" })}</StyledSpan>
      </StyledLabel>
      <SubmitButton
        type="submit"
        value={intl.formatMessage({ id: "send_button" })}
      ></SubmitButton>
    </StyledForm>
  )
}

export default ContactForm
