import React from "react"
import MenuToggler from "./menuToggler"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #55198c;

  &:hover {
    color: red;
  }
`

const Logo = styled.h1`
  font-size: 40px;
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
