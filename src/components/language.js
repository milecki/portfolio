import React from "react"
import styled from "styled-components"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  pl: "PL",
}

const LanguageBox = styled.div`
  display: ${props => props.navbarSize === "desktop" ? "none" : "flex" };
  align-items: center;
  justify-content: center;
  margin-left: 80px;
  margin-right: ${props => props.navbarSize === "desktop" ? 0 : "20px" };
  margin-top: ${props => props.navbarSize === "desktop" ? 0 : "5px" };

  @media (min-width: 768px) {
    display: ${props => props.navbarSize === "desktop" ? "flex" : "none" };
  }
`

const LanguageButton = styled.div`
  display: block;
  padding: 3px 1px;
  margin-left: 10px;
  border: none;
  background: transparent;
  color: ${props => props.currentLocale === props.language ? "#55198c" : "rgba(0,0,0,0.3)"};
  font-family: 'Josefin Sans';
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
`

const Language = ({navbarSize}) => {
  return (
    <LanguageBox navbarSize={navbarSize}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <LanguageButton
              key={language}
              onClick={() => changeLocale(language)}
              language={language}
              currentLocale={currentLocale}
            >
              {languageName[language]}
            </LanguageButton>
          ))
        }
      </IntlContextConsumer>
    </LanguageBox>
  )
}

export default Language
