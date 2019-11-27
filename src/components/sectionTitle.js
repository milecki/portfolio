import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.25em;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1.4;
  text-align: center;

  @media screen and (min-width: 996px) {
    font-size: 2.75rem;
  }
`

const SectionTitle = props => {
  return <StyledH2>{props.children}</StyledH2>
}

export default SectionTitle
