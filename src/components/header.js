import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"

import Container from "../components/container"
import NavHeader from "../components/navHeader"
import NavLinks from "../components/navLinks"

const StyledHeader = styled.header`
  position: fixed;
  background-color: #ffffff;
  border-top: 3px solid #55198c;
  border-bottom: 3px solid #55198c;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

class Header extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(prevState => {
      return { navbarOpen: !prevState.navbarOpen }
    })
  }

  render() {
    return (
      <StyledHeader>
        <Container>
          <StyledNav>
            <NavHeader
              handleNavbar={this.handleNavbar}
              siteTitle={this.props.siteTitle}
            />
            <NavLinks navbarOpen={this.state.navbarOpen} />
          </StyledNav>
        </Container>
      </StyledHeader>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
