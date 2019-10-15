import React from "react"
import styled from "styled-components"
import Container from "../components/container"
import SectionTitle from "../components/sectionTitle"

import { Icon } from "@iconify/react"
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

const icons = [
  { id: 1, name: "HTML 5", src: html5, height: "" },
  { id: 2, name: "CSS 3", src: css3, height: "" },
  { id: 3, name: "Sass", src: sassIcon, height: "" },
  { id: 4, name: "Bootstrap", src: bootstrapIcon, height: "" },
  { id: 5, name: "JavaScript", src: javascriptIcon, height: "" },
  { id: 6, name: "React.js", src: reactIcon, height: "" },
  { id: 7, name: "Redux", src: reduxIcon, height: "" },
  { id: 8, name: "Gatsby.js", src: gatsbyIcon, height: "" },
  { id: 9, name: "Node.js", src: nodejsIcon, height: "" },
  { id: 10, name: "MongoDB", src: mongodbIcon, height: 30 },
  { id: 11, name: "Express.js", src: expressIcon, height: 30 },
  { id: 12, name: "GraphQL", src: graphqlIcon, height: "" },
  { id: 13, name: "Git", src: gitIcon, height: 30 },
  { id: 14, name: "GitHub", src: githubOctocat, height: "" },
  { id: 15, name: "JAMStack", src: jamstackIcon, height: 20 },
  { id: 16, name: "Jekyll", src: jekyllIcon, height: 30 },
  { id: 17, name: "Netlify", src: netlifyIcon, height: "" },
  { id: 18, name: "Contentful", src: contentfulIcon, height: "" },
]

const TechSection = styled.section`
  padding-top: 180px;
  padding-bottom: 80px;
`

const Icons = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  height: 120px;
  margin: 10px;
  padding-top: 30px;
  padding-bottom: 25px;
  background-color: #efefef;
  border-radius: 4px;
  flex-grow: 1;
`

const IconName = styled.p`
  color: #333333;
  font-size: 12px;
`

const Tech = () => {
  return (
    <TechSection>
      <Container>
        <SectionTitle>Technologie, których używam:</SectionTitle>
        <Icons>
          {icons.map(icon => (
            <IconContainer key={icon.id}>
              <Icon icon={icon.src} height={icon.height || 40} />
              <IconName>{icon.name}</IconName>
            </IconContainer>
          ))}
        </Icons>
      </Container>
    </TechSection>
  )
}

export default Tech
