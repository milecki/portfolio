import React from "react"
import styled from "styled-components"

const MenuTogglerIcon = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 3.625em;
  cursor: pointer;

  &:hover div {
    background-color: red;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Bar = styled.div`
  width: 1.875em;
  height: 0.1875em;
  margin-bottom: 0.375em;
  background-color: #55198c;

  &:last-child {
    margin-bottom: 0;
  }
`
const MenuToggler = props => (
  <MenuTogglerIcon onClick={() => props.click()}>
    <Bar></Bar>
    <Bar></Bar>
    <Bar></Bar>
  </MenuTogglerIcon>
)

export default MenuToggler
