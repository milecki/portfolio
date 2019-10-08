import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "../components/container"

const StyledHeader = styled.header`
  margin-bottom: 40px;
`

const Logo = styled.h1`
  font-size: 40px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  /* color: #1a2849; */
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Logo>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Logo>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
