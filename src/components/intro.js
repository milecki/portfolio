import React from "react"
import styled from "styled-components"
import Container from "../components/container"
// import Image from "../components/image"
import blob from "../images/blob2.svg"

const StyledIntro = styled.section`
  margin-top: 200px;
  margin-bottom: 60px;
  display: flex;
`

const IntroText = styled.div`
  text-align: left;
  display: inline-block;
  /* width: 100%; */
  z-index: 2;
`

const IntroImage = styled.div`
  /* width: 30%; */

  display: none;
`

const IntroParagraph = styled.p`
  font-size: 32px;

  padding-bottom: 15px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 44px;
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
          <div
            style={{
              marginTop: "-150px",
              marginLeft: "-350px",
            }}
          >
            <img src={blob} alt="" />
          </div>
        </IntroImage>
      </StyledIntro>
    </Container>
  )
}

export default Intro
