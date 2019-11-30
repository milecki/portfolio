import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
em,
img,
ins,
kbd,
q,
s,
small,
strong,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
article,
aside,
canvas,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
section {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  height: 100%;
  scroll-behavior: smooth;


}

body {
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.4;
}


p {
  font-family: 'Josefin Sans', sans-serif;

}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
`
export default GlobalStyle
