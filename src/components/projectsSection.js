import React from "react"
import styled from "styled-components"
import SectionTitle from "./sectionTitle"
import Container from "./container"
import inception from "../images/inception.gif"
import legal from "../images/legalinformatics.png"
import andrzej from "../images/andrzej.png"
import lexroom from "../images/lexroom.png"
import rodo from "../images/rodo.png"
import kancelaria from "../images/kancelaria.png"
import { InlineIcon } from "@iconify/react"
import githubIcon from "@iconify/icons-logos/github-icon"
import globeIcon from "@iconify/icons-simple-line-icons/globe"

const projectsTexts = [
  {
    id: 1,
    image: inception,
    name: "kulecki.me",
    desc:
      "strona na której się obecnie znajdujesz :-). Z ciekawszych rzeczy - ma moduł z internacjonalizacją (umożliwiającą wybór wersji językowej) i18n. Z kolei iframe'y ze szczegółowymi opisami projektów powstały z wykorzystaniem React Hooks ",
    tags:
      "React.js, React Hooks, Gatsby.js, GraphQL, Styled Components, i18n, CSS Flexbox, JAMStack",
    adressUrl: "https://kulecki.me",
    repoUrl: "",
  },

  {
    id: 2,
    image: legal,
    name: "Legal Informatics",
    desc:
      "Dla zaprzyjaźnionej firmy działającej na styku prawa i IT odtworzyłem projekt, który pierwotnie powstał w Pythonie, we frameworku Django i znajdował się na dość kosztowym hostingu. Lekko zmodyfikowałem jednak kilka rzeczy...",
    tags:
      "React.js, Gatsby.js, GraphQL, JAMstack, Styled Components, CSS Flexbox",
    adressUrl: "https://legalinformatics.pl",
    repoUrl: "https://github.com/milecki/legalinformatics",
  },
  {
    id: 3,
    image: andrzej,
    name: "strzemzalski.eu",
    desc:
      "Mały, prosty projekt dla kumpla ;). Odtworzyłem stronę, której pierwsza wersja powstała w serwisie Foursquare. Zbudowałem ją w Jekyllu, generatorze stron statycznych zbudowanym w języku Ruby i umieściłem na bezpłatnym hostingu Github Pages",
    tags: "Jekyll, Ruby, Markdown, Pug, Github Pages, CSS Flexbox, JAMstack",
    adressUrl: "https://milecki.github.io/andrzej/",
    repoUrl: "https://github.com/milecki/andrzej",
  },
  {
    id: 4,
    image: lexroom,
    name: "Lexroom.pl",
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
    name: "Lexroom UODO Email Template",
    desc:
      "Przykład kreacji do mailingu dla usługi UODO w firmie Lexroom. Do jej stworzenia wykorzystałem mjml, framework do responsywnych emaili stworzony przez firmę Mailjet",
    tags: "mjml, responsive email, HTML 4.0 FTW",
    adressUrl: "https://kulecki.me",
    repoUrl: "",
  },
]

const StyledSection = styled.section`
  /* background-color: #575366; */
  padding-bottom: 80px;
`

const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledProject = styled.div`
  width: 340px;
  margin: 0 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  /* border: 3px solid #55198c; */

  box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25),
    0 1rem 1rem rgba(0, 0, 0, 0.22);
`
const ProjectImage = styled.img`
  width: 340px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  /* border-bottom: 3px solid #55198c; */
  /* padding-bottom: 10px; */
  /* border-left: 3px solid #55198c; */
  /* border-right: 3px solid #55198c; */
`

const ProjectText = styled.div`
  margin: 30px 20px;
`
const ProjectName = styled.h3`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  line-height: 1.4;
  margin-bottom: 20px;
`
const ProjectDescription = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
`

const ProjectTags = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  font-size: 14px;
`

const ProjectAddress = styled.a`
  display: block;
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 5px;
  font-size: 14px;
  color: initial;
`

const ProjectRepo = styled.a`
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 10px;
  font-size: 14px;
  color: initial;
`

// const Project = () => (
// <StyledProject>
//   <ProjectImage src={inception} />
//   <ProjectText>
//     <ProjectName>kulecki.me</ProjectName>
//     <ProjectDescription>Opis :</ProjectDescription>
//     <ProjectTags>Tagi : </ProjectTags>
//     <ProjectAddress href="/">
//       <InlineIcon icon={globeIcon} height="16" /> : kulecki.me
//     </ProjectAddress>
//     <ProjectRepo href="/">
//       <InlineIcon icon={githubIcon} height="16" /> : milecki
//     </ProjectRepo>
//   </ProjectText>
// </StyledProject>
// )
const ProjectsSection = () => (
  <StyledSection>
    <Container>
      <SectionTitle>Wybrane projekty</SectionTitle>
      <Projects>
        {projectsTexts.map(project => {
          return (
            <StyledProject key={project.id}>
              <ProjectImage src={project.image} />
              <ProjectText>
                <ProjectName>{project.name}</ProjectName>
                <ProjectTags>Tagi : {project.tags}</ProjectTags>
                <ProjectDescription>Opis : {project.desc}</ProjectDescription>
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

export default ProjectsSection