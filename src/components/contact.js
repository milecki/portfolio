import React from "react"
// import styled from "styled-components"
import Container from "../components/container"
import SectionTitle from "../components/sectionTitle"

const Contact = () => {
  return (
    <Container>
      <section>
        <SectionTitle>Kontakt</SectionTitle>
        <form action="">
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit">Wyślij</button>
        </form>
      </section>
    </Container>
  )
}

export default Contact
