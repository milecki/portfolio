import React from "react"
import MenuToggler from "./menuToggler"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavHeader = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`

const StyledLink = styled(Link)`
  color: #55198c;
  text-decoration: none;

  &:hover {
    color: red;
  }
`

const Logo = styled.h1`
  font-size: 2.5em;
  font-family: "Dr Sugiyama";
`

const NavHeader = props => (
  <StyledNavHeader>
    <Logo>
      <StyledLink to="/">{props.siteTitle}</StyledLink>
    </Logo>
    <MenuToggler click={props.handleNavbar} />
  </StyledNavHeader>
)

export default NavHeader
