import React from "react"
import MenuToggler from "./menuToggler"
import Language from "../components/language"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../images/kulecki-logo.svg"

const StyledNavHeader = styled.div`
  width: 100%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`

const StyledLink = styled(Link)`
  display: flex;
  height: 3.625em;

  img {
    width: 5em;
  }
`

const NavHeader = props => (
  <StyledNavHeader>
    <StyledLink to="/">
      <img src={logo} alt="kulecki logo" />
    </StyledLink>
    <div style={{display: "flex"}}>
      <Language navbarSize="mobile" />
      <MenuToggler click={props.handleNavbar} />
    </div>
  </StyledNavHeader>
)

export default NavHeader
