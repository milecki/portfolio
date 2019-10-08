import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import Image from "../components/image"
import blob from "../images/blob2.svg"

const StyledIntro = styled.section`
  margin-top: 100px;
  margin-bottom: 150px;
  display: flex;
`

const IntroText = styled.div`
  /* margin-left: 40px; */
  text-align: left;
  display: inline-block;
  width: 70%;
  z-index: 2;
`

const IntroImage = styled.div`
  /* width: 40%; */
`

const IntroParagraph = styled.p`
  font-size: 44px;
  /* text-align: justify; */
  padding-bottom: 15px;
  line-height: 1.4;
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
              maxWidth: `300px`,
              marginTop: "-150px",
              marginLeft: "-350px",
            }}
          >
            {/* <Image style={{ zIndex: 3 }} /> */}
            <img src={blob} alt="" />
          </div>
        </IntroImage>
      </StyledIntro>
    </Container>
  )
}

export default Intro
