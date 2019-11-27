import React from "react"
import Layout from "../components/layout"
import IntroSection from "../components/introSection"
import SEO from "../components/seo"
import ProjectsSection from "../components/projectsSection"
import TechSection from "../components/techSection"
import ContactSection from "../components/contactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <TechSection />
    <ProjectsSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
