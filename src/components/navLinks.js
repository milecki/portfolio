import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledUl = styled.ul`
  height: ${props => props.ulHeight};
  transition: height 0.2s ease-in-out;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    height: initial;
  }
`

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  padding: 20px 0;

  &:hover {
    color: red;
  }

  @media screen and (min-width: 768px) {
    margin-left: 70px;
    padding: 0;
  }
`

class NavLinks extends Component {
  render() {
    return (
      <StyledUl ulHeight={this.props.navbarOpen ? "120px" : 0}>
        <li>
          <StyledLink to="/#projects">Projekty</StyledLink>
        </li>
        <li>
          <StyledLink to="/#contact">Kontakt</StyledLink>
        </li>
      </StyledUl>
    )
  }
}

export default NavLinks
