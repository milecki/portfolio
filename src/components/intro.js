import React from "react"
import styled from "styled-components"
import Container from "../components/container"
// import Image from "../components/image"
// import blob from "../images/blob2.svg"
import desk from "../images/1.3.png"

const StyledIntro = styled.section`
  padding-top: 100px;
  padding-bottom: 120px;
  display: flex;
`

const IntroText = styled.div`
  text-align: left;
  display: inline-block;
  z-index: 2;
  width: 50%;
  margin-top: 50px;
`

const IntroImage = styled.div`
  width: 50%;
  padding: 0 20px;

  img {
    width: 100%;
  }
`

const IntroParagraph = styled.p`
  font-size: 32px;

  padding-bottom: 15px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

const Intro = () => {
  return (
    <Container>
      <StyledIntro>
        <IntroText>
          <IntroParagraph>
            Cześć! Nazywam się Michał i jestem front-end developerem z
            Wrocławia. Interesuje mnie web development, design, UX i technologie
            webowe.
          </IntroParagraph>
        </IntroText>
        <IntroImage>
          <img src={desk} alt="" />
        </IntroImage>
      </StyledIntro>
    </Container>
  )
}

export default Intro
