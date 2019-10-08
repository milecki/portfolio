import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  /* background-color: #cccccc; */
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
`

const Footer = () => (
  <StyledFooter>
    Copyright &copy; {new Date().getFullYear()} by
    <Link to="/" style={{ textDecoration: "none" }}>
      <span
        style={{
          fontFamily: "Dr Sugiyama",
          marginLeft: "5px",
          marginBottom: "4px",
          fontSize: "21px",
        }}
      >
        kulecki
      </span>
    </Link>
  </StyledFooter>
)

export default Footer
