import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { Icon } from "@iconify/react"

import Container from "../components/container"
import SectionTitle from "./sectionTitle"
import reactIcon from "@iconify/icons-logos/react"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import bootstrapIcon from "@iconify/icons-logos/bootstrap"
import reduxIcon from "@iconify/icons-logos/redux"
import contentfulIcon from "@iconify/icons-logos/contentful"
import css3 from "@iconify/icons-logos/css-3"
import figmaIcon from "@iconify/icons-logos/figma"
import gitIcon from "@iconify/icons-logos/git"
import githubOctocat from "@iconify/icons-logos/github-octocat"
import graphqlIcon from "@iconify/icons-logos/graphql"
import html5 from "@iconify/icons-logos/html-5"
import jamstackIcon from "@iconify/icons-logos/jamstack"
import javascriptIcon from "@iconify/icons-logos/javascript"
import jekyllIcon from "@iconify/icons-logos/jekyll"
import reduxSagaIcon from "@iconify/icons-logos/redux-saga"
import netlifyIcon from "@iconify/icons-logos/netlify"
import npmIcon from "@iconify/icons-logos/npm"
import sassIcon from "@iconify/icons-logos/sass"

const icons = [
  { id: 5, name: "JavaScript", src: javascriptIcon, height: "" },
  { id: 6, name: "React.js", src: reactIcon, height: "" },
  { id: 7, name: "Redux", src: reduxIcon, height: "" },
  { id: 10, name: "Redux-Saga", src: reduxSagaIcon, height: "" },
  { id: 8, name: "Gatsby.js", src: gatsbyIcon, height: "" },
  { id: 12, name: "GraphQL", src: graphqlIcon, height: "" },
  { id: 1, name: "HTML 5", src: html5, height: "" },
  { id: 2, name: "CSS 3", src: css3, height: "" },
  { id: 3, name: "Sass", src: sassIcon, height: "" },
  { id: 4, name: "Bootstrap", src: bootstrapIcon, height: "" },
  { id: 9, name: "npm", src: npmIcon, height: 35 },
  { id: 13, name: "Git", src: gitIcon, height: 30 },
  { id: 14, name: "GitHub", src: githubOctocat, height: "" },
  { id: 15, name: "JAMStack", src: jamstackIcon, height: 20 },
  { id: 16, name: "Jekyll", src: jekyllIcon, height: 30 },
  { id: 17, name: "Netlify", src: netlifyIcon, height: "" },
  { id: 18, name: "Contentful", src: contentfulIcon, height: "" },
  { id: 11, name: "Figma", src: figmaIcon, height: "" },
]

const Tech = styled.section`
  font-size: 1rem;
  padding-top: 6.875em;
  font-family: "Josefin Sans", sans-serif;

  @media screen and (min-width: 996px) {
    margin-top: 2.125em;
  }
`

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 10em;
  height: 7.5em;
  margin: 0.625em;
  padding-top: 1.875em;
  padding-bottom: 1.5625em;
  border-radius: 0.25em;
  background-color: #efefef;
`

const IconName = styled.p`
  font-size: 0.75em;
  color: #333333;
`

const TechSection = () => {
  const intl = useIntl()
  return (
    <Tech id="tech">
      <Container>
        <SectionTitle>
          {intl.formatMessage({ id: "headings.technologies" })}
        </SectionTitle>
        <Icons>
          {icons.map(icon => (
            <IconContainer key={icon.id}>
              <Icon icon={icon.src} height={icon.height || 40} />
              <IconName>{icon.name}</IconName>
            </IconContainer>
          ))}
        </Icons>
      </Container>
    </Tech>
  )
}

export default TechSection
