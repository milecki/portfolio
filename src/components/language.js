import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  pl: "PL",
}

const Language = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                border: `none`,
                color:
                  currentLocale === language ? `#55198c` : `rgba(0,0,0,0.3)`,
                textDecoration: `none`,
                cursor: `pointer`,
                background: `transparent`,
                fontFamily: `Josefin Sans`,
                fontSize: `18px`,
                padding: `3px 1px`,
                marginLeft: `10px`,
                outline: `none`,
              }}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
