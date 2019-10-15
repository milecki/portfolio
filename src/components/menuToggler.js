import React from "react"
import styled from "styled-components"

const MenuTogglerIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 58px;

  &:hover div {
    background-color: red;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Bar = styled.div`
  margin-bottom: 6px;
  width: 30px;
  height: 3px;
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
