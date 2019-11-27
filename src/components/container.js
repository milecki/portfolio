import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1170px;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0 1.25em;

  @media screen and (min-width: 768px) {
    padding: 0 2.5em;
  }
`

const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>
}

export default Container
