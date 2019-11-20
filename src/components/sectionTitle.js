import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  line-height: 1.4;
  font-family: "Josefin Sans", sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
`

const SectionTitle = props => {
  return <StyledH2>{props.children}</StyledH2>
}

export default SectionTitle
