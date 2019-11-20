import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #55198c;
  font-family: "Dr Sugiyama";
  margin-left: 5px;
  margin-bottom: 4px;
  font-size: 21px;

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
