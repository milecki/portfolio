import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/kulecki-logo.svg"

const StyledFooter = styled.footer`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5em;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
`

const StyledLink = styled(Link)`
  display: flex;
  margin-left: 0.3125em;
  margin-bottom: 0.3125em;

  img {
    width: 2.75em;
  }
`

const Footer = () => (
  <StyledFooter>
    Copyright &copy; {new Date().getFullYear()} by
    <StyledLink to="/">
      <img src={logo} alt="kulecki logo" />
    </StyledLink>
  </StyledFooter>
)

export default Footer
