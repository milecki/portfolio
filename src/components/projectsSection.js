import React, { Component } from "react"
import styled from "styled-components"
import SectionTitle from "./sectionTitle"
import Container from "./container"
import inception from "../assets/inception.mp4"
import legal from "../images/legalinformatics.png"
import andrzej from "../images/andrzej.png"
import lexroom from "../images/lexroom.png"
import rodo from "../images/rodo.png"
import kancelaria from "../images/kancelaria.png"
import { InlineIcon } from "@iconify/react"
import githubIcon from "@iconify/icons-logos/github-icon"
import globeIcon from "@iconify/icons-simple-line-icons/globe"

const projects = [
  {
    id: 1,
    video: inception,
    name: "kulecki.me",
    categories: [
      "React.js",
      "Gatsby.js",
      "Styled Components",
      "CSS Flexbox",
      "JAMstack",
      "GraphQL",
      "i18n",
      "React Hooks",
      "Netlify",
    ],
    desc:
      "strona na której się obecnie znajdujesz :-). Z ciekawszych rzeczy - ma moduł z internacjonalizacją (umożliwiającą wybór wersji językowej) i18n. Z kolei iframe'y ze szczegółowymi opisami projektów powstały z wykorzystaniem React Hooks ",
    tags:
      "React.js, React Hooks, Gatsby.js, GraphQL, Styled Components, i18n, CSS Flexbox, JAMstack, Netlify",
    adressUrl: "https://kulecki.me",
    repoUrl: "",
  },

  {
    id: 2,
    image: legal,
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
    desc:
      "Dla zaprzyjaźnionej firmy działającej na styku prawa i IT odtworzyłem projekt, który pierwotnie powstał w Pythonie, we frameworku Django i znajdował się na dość kosztowym hostingu. Lekko zmodyfikowałem jednak kilka rzeczy...",
    tags:
      "React.js, Gatsby.js, GraphQL, JAMstack, Styled Components, CSS Flexbox, Pose",
    adressUrl: "https://legalinformatics.pl",
    repoUrl: "https://github.com/milecki/legalinformatics",
  },
  {
    id: 3,
    image: andrzej,
    name: "strzemzalski.eu",
    categories: [
      "Jekyll",
      "Ruby",
      "Markdown",
      "Pug",
      "GitHub Pages",
      "CSS Flexbox",
      "JAMstack",
    ],
    desc:
      "Mały, prosty projekt dla kumpla ;). Odtworzyłem stronę, której pierwsza wersja powstała w serwisie Foursquare. Zbudowałem ją w Jekyllu, generatorze stron statycznych zbudowanym w języku Ruby i umieściłem na bezpłatnym hostingu Github Pages",
    tags: "Jekyll, Ruby, Markdown, Pug, GitHub Pages, CSS Flexbox, JAMstack",
    adressUrl: "https://milecki.github.io/andrzej/",
    repoUrl: "https://github.com/milecki/andrzej",
  },
  {
    id: 4,
    image: lexroom,
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
    desc:
      "Strona wciąż powstającego serwisu elearningowego z kursami video o tematyce prawniczej. Firma świadczy też usługi związane UODO",
    tags:
      "React.js, Gatsby.js, GraphQL, JAMstack, Sass, CSS Modules, CSS Flexbox",
    adressUrl: "https://kulecki.me",
    repoUrl: "https://github.com/milecki/lexroom",
  },
  {
    id: 5,
    image: kancelaria,
    name: "Kancelaria Prof. Szydło i Współpracownicy",
    categories: [
      "React.js",
      "Gatsby.js",
      "GraphQL",
      "WordPress",
      "JAMstack",
      "Sass",
      "CSS Modules",
      "CSS Flexbox",
    ],
    desc:
      "Strona internetowa kancelarii prawnej. Pierwszą wersję stworzyłem w czystym WordPressie. Nowa wersja powstała w Gatsbym z WordPressem na backendzie jako Headless CMS",
    tags:
      "React.js, Gatsby.js, GraphQL, WordPress, JAMstack, Sass, CSS Modules, CSS Flexbox",
    adressUrl: "https://kancelariaszydlo.pl",
    repoUrl: "",
  },
  {
    id: 6,
    image: rodo,
    categories: ["HTML Email", "mjml"],
    name: "Lexroom UODO Email Template",
    desc:
      "Przykład kreacji do mailingu dla usługi UODO w firmie Lexroom. Do jej stworzenia wykorzystałem mjml, framework do responsywnych emaili stworzony przez firmę Mailjet",
    tags: "mjml, HTML Email",
    adressUrl: "https://kulecki.me",
    repoUrl: "",
  },
]

const StyledSection = styled.section`
  font-size: 1rem;
  padding-top: 6.875em;

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
  margin: 0.3571428571em;
  padding: 0.7142857143em 2.1428571429em;
  border: 0.2142857143em solid #55198c;
  border-radius: 1.7857142857em;
  background-color: #ffffff;
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
    margin: 1.25em 0.6em 0;
  }

  @media screen and (min-width: 960px) {
    width: 31%;
  }
`
const ProjectImage = styled.img`
  width: 100%;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
`

const ProjectVideo = styled.video`
  width: 100%;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
`

const ProjectText = styled.div`
  margin: 1.5em 1em;
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
      items: projects,
      projectItems: projects,
      categories: getCategories(projects),
    }
  }

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

  render() {
    return (
      <StyledSection id="projects">
        <Container>
          <SectionTitle>Wybrane projekty</SectionTitle>
          <Categories>
            <CategoriesInstruction>Wybierz kategorię:</CategoriesInstruction>
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
                    <ProjectVideo type="video/mp4" preload="auto" autoPlay loop>
                      <source src={project.video}></source>
                      Your browser does not support the video tag.
                    </ProjectVideo>
                  ) : (
                    <ProjectImage src={project.image} alt="" />
                  )}

                  <ProjectText>
                    <ProjectName>{project.name}</ProjectName>
                    <ProjectTags>Tagi : {project.tags}</ProjectTags>
                    <ProjectDescription>
                      Opis : {project.desc}
                    </ProjectDescription>
                    <ProjectAddress href={project.adressUrl}>
                      <InlineIcon icon={globeIcon} height="16" /> :{" "}
                      {project.adressUrl.slice(8)}
                    </ProjectAddress>
                    <ProjectRepo href={project.repoUrl}>
                      <InlineIcon icon={githubIcon} height="16" /> :{" "}
                      {project.repoUrl.slice(8)}
                    </ProjectRepo>
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

export default ProjectsSection
