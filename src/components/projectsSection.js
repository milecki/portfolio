import React, { Component } from "react"
import styled from "styled-components"
import SectionTitle from "./sectionTitle"
import Container from "./container"
import inceptionVideo from "../assets/inception.mp4"
import InceptionImg from "../components/imgInception"
import Kancelaria from "../components/imgKancelaria"
import Andrzej from "../components/imgAndrzej"
import Rodo from "../components/imgRodo"
import Lexroom from "../components/imgLexroom"
import Legalinformatics from "../components/imgLegalinformatics"
import { InlineIcon } from "@iconify/react"
import githubIcon from "@iconify/icons-logos/github-icon"
import globeIcon from "@iconify/icons-simple-line-icons/globe"

const projects = [
  {
    id: 1,
    video: inceptionVideo,
    image: <InceptionImg />,
    name: "kulecki.me",
    categories: [
      "React.js",
      "Gatsby.js",
      "Styled Components",
      "CSS Flexbox",
      "JAMstack",
      "GraphQL",
      "Netlify",
    ],
    desc:
      "Strona na której obecnie się znajdujesz 😀. Zaprojektowana i zakodowana przeze mnie od A do Z, z wyjątkiem ilustracji, stworzonych przez Victora Rigo według mojej koncepcji. Strona wciąż ewoluuje. Właśnie pracuję nad modułem z internacjonalizacją, i18n (umożliwiającym wybór między polską a angielską wersją językową) oraz nad dodaniem iframe'ów ze szczegółowymi opisami wykonanych przeze mnie projektów. Zamierzam wykorzystać do tego React Hooks.",
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
    desc:
      'Dla firmy działającej na styku prawa i IT odtworzyłem we frameworku Gatsby.js stronę, która pierwotnie zakodowana była (przez innego developera) w Pythonie, we frameworku Django i znajdowała się na dość kosztowym hostingu. Do projektu wprowadziłem kilka zmian, m. in. opisy usług z osobnych podstron przeniosłem na stronę główną w postaci rozwijanych "akordeonów", zastosowałem też inny wariant logotypu, który lepiej się skaluje w wersji mobilnej menu.',
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
    desc:
      "Mały, prosty projekt dla Andrzeja, mojego szalenie utalentowanego kumpla-muzyka 👨‍🎤. Odtworzyłem prostą stronę-wizytówkę, której pierwsza wersja powstała w wizualnym kreatorze stron Squarespace, rękami samego Andrzeja. Chciałem wypróbować jakiś inny niż Gatsby, ale zachwalany przez JAMstackową społeczność generator stron statycznych. Sięgnąłem więc po klasykę i wybrałem napisany w Rubym framework Jekyll a stronę umieściłem na bezpłatnym hostingu Github Pages.",
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
    desc:
      "Stworzona w Gatsby.js strona firmy oferującej m.in. szkolenia stacjonarne oraz (wkrótce) kursy online z dziedziny prawa. Projekt UI oraz logotyp są mojego autorstwa. Kursy video będą udostępniane za pośrednictwem platformy Teachable. Zajmowałem się jej konfiguracją, przygotowałem również widoki dla katalogu kursów, oraz pojedynczego kursu, czego efekty będzie można zobaczyć już niedługo. W tym projekcie do stylów CSS wykorzystałem CSS Modules wraz z preprocesorem Sass.",
    tags:
      "React.js, Gatsby.js, GraphQL, JAMstack, Sass, CSS Modules, CSS Flexbox",
    adressUrl: "https://lexroom.pl",
    repoUrl: "https://github.com/milecki/lexroom",
  },
  {
    id: 5,
    image: <Kancelaria />,
    name: "Kancelaria Prof. Szydło i Współpracownicy",
    categories: ["WordPress, jQuery"],
    desc:
      "Strona internetowa kancelarii prawnej. Ze względu na obecność bloga, do jej przygotowania wybrałem system CMS WordPress. UI zaprojektowałem wspólnie z Basią Rudek, która stworzyła też identyfikację wizualną kancelarii. Przy tworzeniu własnego motywu korzystałem m.in. z pluginu Unyson. Czas ładowanie strony nie jest idealny 😉, dlatego pracuję już nad nową wersją strony (link do repo tej wersji zamieszczam poniżej), w Gatsbym, z WordPressem na backendzie jako headless CMS.",
    tags: "WordPress, jQuery",
    adressUrl: "http://kancelariaszydlo.pl",
    repoUrl: "https://github.com/milecki/kancelaria",
  },
  {
    id: 6,
    image: <Rodo />,
    categories: ["HTML Email", "mjml"],
    name: "Lexroom UODO Email Template",
    desc:
      'Przykład kreacji do mailingu dla usługi wsparcia RODO firmy Lexroom. Do jej stworzenia wykorzystałem mjml, framework do responsywnych e-maili stworzony przez firmę Mailjet. W porównaniu z mozolnym, "ręcznym" tworzeniem wszystkiego w tabelach, jakby to był rok 1999 (HTML 4.01 FTW), była to prawdziwa przyjemność. W przyszłości chętnie spróbuję skorzystać z innego polecanego frameworka do tworzenia responsywnych e-maili, Foundation for Emails.',
    tags: "mjml, HTML Email",
    adressUrl: "https://milecki.github.io/lexroom-rodo-email/",
    repoUrl: "https://github.com/milecki/lexroom-rodo-email",
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
                    <ProjectVideo
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={project.image}
                    >
                      <source src={project.video} type="video/mp4"></source>
                      Your browser does not support the video tag.
                    </ProjectVideo>
                  ) : (
                    <ProjectImage>{project.image}</ProjectImage>
                  )}

                  <ProjectText>
                    <ProjectName>{project.name}</ProjectName>
                    <ProjectTags>Tagi : {project.tags}</ProjectTags>
                    <ProjectDescription>
                      Opis : {project.desc}
                    </ProjectDescription>
                    <ProjectAddress href={project.adressUrl}>
                      <InlineIcon icon={globeIcon} height="16" /> :{" "}
                      {this.processUrl(project.adressUrl)}
                    </ProjectAddress>
                    <ProjectRepo href={project.repoUrl}>
                      <InlineIcon icon={githubIcon} height="16" /> :{" "}
                      {this.processUrl(project.repoUrl)}
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
