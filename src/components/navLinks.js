import React, { Component } from "react"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"

const StyledUl = styled.ul`
  font-size: 1rem;
  height: ${props => props.ulHeight};
  overflow: hidden;
  transition: height 0.2s ease-in-out;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    height: initial;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.125em;
  display: block;
  padding: 1.1111111111em 0;
  color: #55198c;
  font-family: "Josefin Sans", sans-serif;
  text-decoration: none;

  &:hover {
    color: red;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3.8888888889em;
    padding: 0;
  }
`

class NavLinks extends Component {
  render() {
    const { intl } = this.props
    return (
      <StyledUl ulHeight={this.props.navbarOpen ? "12.1875em" : 0}>
        <li>
          <StyledLink to="/#tech">
            {intl.formatMessage({ id: "nav.technologies" })}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/#projects">
            {intl.formatMessage({ id: "nav.projects" })}
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/#contact">
            {intl.formatMessage({ id: "nav.contact" })}
          </StyledLink>
        </li>
      </StyledUl>
    )
  }
}

export default injectIntl(NavLinks)
