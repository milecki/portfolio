import React, { Component } from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { InlineIcon } from "@iconify/react"
import styled from "styled-components"

import SectionTitle from "./sectionTitle"
import Container from "./container"

import inceptionVideo from "../assets/inception.mp4"
import inceptionImage from "../images/inception.jpg"
import Kancelaria from "../components/imgKancelaria"
import Andrzej from "../components/imgAndrzej"
import Rodo from "../components/imgRodo"
import Lexroom from "../components/imgLexroom"
import Legalinformatics from "../components/imgLegalinformatics"
import githubIcon from "@iconify/icons-logos/github-icon"
import globeIcon from "@iconify/icons-simple-line-icons/globe"

const StyledSection = styled.section`
  padding-top: 6.875em;
  font-size: 1rem;
  font-family: "Josefin Sans", sans-serif;

  @media screen and (min-width: 996px) {
    margin-top: 2.125em;
  }
`

const Categories = styled.div`
  margin: 0 auto;
  text-align: center;
`
const CategoriesInstruction = styled.p`
  font-size: 1.25em;
  margin-bottom: 0.5em;
  color: #55198c;
`

const CategoryButton = styled.button`
  font-size: 0.875em;

  background-color: #ffffff;
  border: none;
  border-bottom: 0.1428571429em solid #55198c;
  border-top: 0.1428571429em dotted transparent;
  padding: 0.1428571429em 0.2142857143em;
  margin: 0.5em;
  color: #55198c;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    background-color: #55198c;
    color: #ffffff;
  }

  @media screen and (min-width: 960px) {
    margin: 0.3571428571em;
    padding: 0.7142857143em 2.1428571429em;
    border: 0.2142857143em solid #55198c;
    border-radius: 1.7857142857em;
  }
`

const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledProject = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 26.25em;
  margin: 2.5em auto 0;
  border-radius: 0.25em;
  box-shadow: 0 1.4em 2.8em rgba(0, 0, 0, 0.25), 0 1em 1em rgba(0, 0, 0, 0.22);

  @media screen and (min-width: 640px) {
    width: 46.5%;
    margin: 2em 0.6em 0;
  }

  @media screen and (min-width: 960px) {
    width: 31%;
  }
`
const ProjectImage = styled.div`
  width: 100%;

  img {
    border-top-left-radius: 0.25em;
    border-top-right-radius: 0.25em;
  }
`
const ProjectVideoWrapper = styled.div`
  width: 100%;
  height: auto;
  font-size: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  /* overflow: hidden; */
`

const ProjectVideo = styled.video`
  display: block;
  width: 100%;
  height: auto;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const ProjectText = styled.div`
  margin: 1.5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const ProjectName = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.8333333333em;
  font-family: "Josefin Sans", sans-serif;
  line-height: 1.4;
`
const ProjectDescription = styled.p`
  margin-bottom: 1.25em;
  line-height: 1.5;
`

const ProjectTags = styled.p`
  font-size: 0.875em;
  margin-bottom: 1.4285714286em;
  line-height: 1.5;
`

const ProjectAddress = styled.a`
  font-size: 0.875em;
  display: block;
  margin-bottom: 0.3571428571em;
  color: initial;
  font-family: "Josefin Sans", sans-serif;
  text-decoration: none;
`

const ProjectRepo = styled.a`
  font-size: 0.875em;
  margin-bottom: 0.7142857143em;
  color: initial;
  font-family: "Josefin Sans", sans-serif;
  text-decoration: none;
`

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.categories
  })

  let mergedTempItems = [].concat.apply([], tempItems)
  let categories = new Set(mergedTempItems)
  categories = ["all", ...categories]
  return categories
}

class ProjectsSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.projects,
      projectItems: this.projects,
      categories: getCategories(this.projects),
    }
  }

  intl = this.props.intl

  projects = [
    {
      id: 1,
      video: inceptionVideo,
      image: inceptionImage,
      name: "kulecki.me",
      categories: [
        "React.js",
        "Gatsby.js",
        "i18n",
        "Styled Components",
        "CSS Flexbox",
        "JAMstack",
        "GraphQL",
        "Netlify",
      ],
      desc: this.intl.formatMessage({ id: "projects.kulecki.desc" }),
      tags:
        "React.js, Gatsby.js, GraphQL, Styled Components, CSS Flexbox, JAMstack, Netlify",
      adressUrl: "https://kulecki.me",
      repoUrl: "https://github.com/milecki/portfolio",
    },

    {
      id: 2,
      image: <Legalinformatics />,
      name: "Legal Informatics",
      categories: [
        "React.js",
        "Gatsby.js",
        "Styled Components",
        "CSS Flexbox",
        "JAMstack",
        "GraphQL",
        "Pose",
      ],
      desc: this.intl.formatMessage({ id: "projects.legal.desc" }),
      tags:
        "React.js, Gatsby.js, GraphQL, JAMstack, Styled Components, CSS Flexbox, Pose",
      adressUrl: "https://legalinformatics.pl",
      repoUrl: "https://github.com/milecki/legalinformatics",
    },
    {
      id: 3,
      image: <Andrzej />,
      name: "strzemzalski.eu",
      categories: [
        "Jekyll",
        "Markdown",
        "GitHub Pages",
        "CSS Flexbox",
        "JAMstack",
      ],
      desc: this.intl.formatMessage({ id: "projects.strzemzalski.desc" }),
      tags: "Jekyll, Markdown, GitHub Pages, CSS Flexbox, JAMstack",
      adressUrl: "https://milecki.github.io/andrzej/",
      repoUrl: "https://github.com/milecki/andrzej",
    },
    {
      id: 4,
      image: <Lexroom />,
      name: "Lexroom.pl",
      categories: [
        "React.js",
        "Gatsby.js",
        "GraphQL",
        "JAMstack",
        "Sass",
        "CSS Modules",
        "CSS Flexbox",
      ],
      desc: this.intl.formatMessage({ id: "projects.lexroom.desc" }),
      tags:
        "React.js, Gatsby.js, GraphQL, JAMstack, Sass, CSS Modules, CSS Flexbox",
      adressUrl: "https://lexroom.pl",
      repoUrl: "https://github.com/milecki/lexroom",
    },
    {
      id: 5,
      image: <Kancelaria />,
      name: "Kancelaria Prof. Szydło i Współpracownicy",
      categories: ["WordPress", "jQuery"],
      desc: this.intl.formatMessage({ id: "projects.kancelaria.desc" }),
      tags: "WordPress, jQuery",
      adressUrl: "http://kancelariaszydlo.pl",
      repoUrl: "https://github.com/milecki/kancelaria",
    },
    {
      id: 6,
      image: <Rodo />,
      categories: ["HTML Email", "mjml"],
      name: "Lexroom UODO Email Template",
      desc: this.intl.formatMessage({ id: "projects.rodo.desc" }),
      tags: "mjml, HTML Email",
      adressUrl: "https://milecki.github.io/lexroom-rodo-email/",
      repoUrl: "https://github.com/milecki/lexroom-rodo-email",
    },
  ]

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all") {
      this.setState(() => {
        return { projectItems: tempItems }
      })
    } else {
      let items = tempItems.filter(project =>
        project.categories.includes(category)
      )
      this.setState(() => {
        return { projectItems: items }
      })
    }
  }

  processUrl = url => {
    if (url.includes("https://")) {
      return url.slice(8)
    } else if (url.includes("http://")) {
      return url.slice(7)
    } else {
      return url
    }
  }

  render() {
    return (
      <StyledSection id="projects">
        <Container>
          <SectionTitle>
            {this.intl.formatMessage({ id: "headings.projects" })}
          </SectionTitle>
          <Categories>
            <CategoriesInstruction>
              {this.intl.formatMessage({ id: "choose_category" })}
            </CategoriesInstruction>
            {this.state.categories.map((category, index) => {
              return (
                <CategoryButton
                  type="button"
                  key={index}
                  onClick={() => {
                    this.handleItems(category)
                  }}
                >
                  {category}
                </CategoryButton>
              )
            })}
          </Categories>

          <Projects>
            {this.state.projectItems.map(project => {
              return (
                <StyledProject key={project.id}>
                  {project.video ? (
                    <ProjectVideoWrapper>
                      <ProjectVideo
                        preload="yes"
                        muted
                        autoPlay
                        playsInline
                        loop
                        poster={project.image}
                      >
                        <source src={project.video} type="video/mp4"></source>
                        Your browser does not support the video tag.
                      </ProjectVideo>
                    </ProjectVideoWrapper>
                  ) : (
                    <ProjectImage>{project.image}</ProjectImage>
                  )}

                  <ProjectText>
                    <div>
                      <ProjectName>{project.name}</ProjectName>
                      <ProjectTags>
                        {this.intl.formatMessage({ id: "tags" })} {project.tags}
                      </ProjectTags>
                      <ProjectDescription>
                        {this.intl.formatMessage({ id: "description" })}{" "}
                        {project.desc}
                      </ProjectDescription>
                    </div>
                    <div>
                      <ProjectAddress href={project.adressUrl} target="_blank">
                        <InlineIcon icon={globeIcon} height="16" /> :{" "}
                        {this.processUrl(project.adressUrl)}
                      </ProjectAddress>
                      <ProjectRepo href={project.repoUrl} target="_blank">
                        <InlineIcon icon={githubIcon} height="16" /> :{" "}
                        {this.processUrl(project.repoUrl)}
                      </ProjectRepo>
                    </div>
                  </ProjectText>
                </StyledProject>
              )
            })}
          </Projects>
        </Container>
      </StyledSection>
    )
  }
}

export default injectIntl(ProjectsSection)
