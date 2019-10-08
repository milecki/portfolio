import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import SectionTitle from "../components/sectionTitle"

import { Icon, InlineIcon } from "@iconify/react"
import reactIcon from "@iconify/icons-logos/react"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import bootstrapIcon from "@iconify/icons-logos/bootstrap"
import reduxIcon from "@iconify/icons-logos/redux"
import visualStudioCodeIcon from "@iconify/icons-logos/visual-studio-code"
import webpackIcon from "@iconify/icons-logos/webpack"
import wordpressIcon from "@iconify/icons-logos/wordpress-icon"
import contentfulIcon from "@iconify/icons-logos/contentful"
import css3 from "@iconify/icons-logos/css-3"
import expressIcon from "@iconify/icons-logos/express"
import gitIcon from "@iconify/icons-logos/git"
import githubOctocat from "@iconify/icons-logos/github-octocat"
import graphqlIcon from "@iconify/icons-logos/graphql"
import gulpIcon from "@iconify/icons-logos/gulp"
import html5 from "@iconify/icons-logos/html-5"
import jamstackIcon from "@iconify/icons-logos/jamstack"
import javascriptIcon from "@iconify/icons-logos/javascript"
import jekyllIcon from "@iconify/icons-logos/jekyll"
import jqueryIcon from "@iconify/icons-logos/jQuery"
import lessIcon from "@iconify/icons-logos/less"
import mochaIcon from "@iconify/icons-logos/mocha"
import mongodbIcon from "@iconify/icons-logos/mongodb"
import netlifyIcon from "@iconify/icons-logos/netlify"
import nodejsIcon from "@iconify/icons-logos/nodejs"
import npmIcon from "@iconify/icons-logos/npm"
import sassIcon from "@iconify/icons-logos/sass"
import jestIcon from "@iconify/icons-logos/jest"
import jasmineIcon from "@iconify/icons-logos/jasmine"
import chaiIcon from "@iconify/icons-logos/chai"

const TechSection = styled.section``

const TechContainer = styled.div`
  /* display: flex; */
`

const TechBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* margin-right: 100px; */
`

const StyledIcon = styled(Icon)`
  margin-right: 100px;
  margin-bottom: 50px;
`

const Tech = () => {
  return (
    <TechSection>
      <Container>
        <TechContainer>
          <SectionTitle>Technologie, których używam:</SectionTitle>
          <TechBox>
            <StyledIcon icon={html5} height="40" />
            <StyledIcon icon={css3} height="40" />
            {/* <StyledIcon icon={lessIcon} height="30" /> */}
            <StyledIcon icon={sassIcon} height="30" />
            <StyledIcon icon={bootstrapIcon} height="40" />
            <StyledIcon icon={javascriptIcon} height="40" />
            <StyledIcon icon={jqueryIcon} height="20" />
            <StyledIcon icon={reactIcon} height="40" />
            <StyledIcon icon={reduxIcon} height="40" />
            <StyledIcon icon={gatsbyIcon} height="40" />
            <StyledIcon icon={nodejsIcon} height="40" />
            <StyledIcon icon={mongodbIcon} height="40" />
            <StyledIcon icon={expressIcon} height="30" />
            <StyledIcon icon={graphqlIcon} height="40" />
            {/* <StyledIcon icon={npmIcon} height="30" /> */}
            {/* <StyledIcon icon={webpackIcon} height="40" /> */}
            <StyledIcon icon={gitIcon} height="30" />
            <StyledIcon icon={githubOctocat} height="40" />
            {/* <StyledIcon icon={gulpIcon} height="40" /> */}
            <StyledIcon icon={jamstackIcon} height="25" />
            <StyledIcon icon={jekyllIcon} height="40" />
            <StyledIcon icon={netlifyIcon} height="40" />
            <StyledIcon icon={contentfulIcon} height="40" />
            {/* <StyledIcon icon={wordpressIcon} height="40" /> */}
            {/* <StyledIcon icon={mochaIcon} height="40" /> */}
            {/* <StyledIcon icon={jestIcon} height="40" /> */}
            {/* <StyledIcon icon={jasmineIcon} height="40" /> */}
            {/* <StyledIcon icon={chaiIcon} height="40" /> */}
            <StyledIcon icon={visualStudioCodeIcon} height="40" />
          </TechBox>
        </TechContainer>
      </Container>
    </TechSection>
  )
}

export default Tech
