import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  font-size: 1.3125em;
  margin-left: 0.2380952381em;
  margin-bottom: 0.1904761905em;
  color: #55198c;
  font-family: "Dr Sugiyama";
  text-decoration: none;
    &:hover {
    color: red;
  }
`

const Footer = () => (
  <StyledFooter>
    Copyright &copy; {new Date().getFullYear()} by
    <StyledLink to="/">kulecki</StyledLink>
  </StyledFooter>
)

export default Footer
