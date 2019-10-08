import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  /* margin: 60px 0 30px; */
  margin-bottom: 80px;
  /* font-size: 32px; */
  text-align: center;
  font-size: 44px;
  line-height: 1.4;
  font-family: "Josefin Sans", sans-serif;
`

const SectionTitle = props => {
  return <StyledH2>{props.children}</StyledH2>
}

export default SectionTitle
