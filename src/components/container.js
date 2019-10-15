import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`

const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>
}

export default Container
