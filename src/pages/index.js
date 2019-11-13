import React from "react"
// import styled from "styled-components"

import Layout from "../components/layout"
import Intro from "../components/intro"
import SEO from "../components/seo"
// import ProjectsSection from "../components/projectsSection"
import ProjectsSectionTEST from "../components/projectsSectionTEST"
import Tech from "../components/tech"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Tech />
    <ProjectsSectionTEST />
    <Contact />
  </Layout>
)

export default IndexPage
