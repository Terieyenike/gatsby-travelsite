// import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import { FaBars } from "react-icons/fa"
import { menuData } from "../../data/MenuData"
import { Nav, NavLink, NavMenu, NavBtn, NavHeader } from "./Header.style"
import Container from "../../Container"
import { Button } from "../Button/Button"
import "../layout.css"

const Header = () => {
  return (
    <>
      <NavHeader>
        <Container>
          <Nav>
            <NavLink to="/">Explor-e</NavLink>
            <Bars />
            <NavMenu>
              {menuData.map((menu, id) => (
                <NavLink to={menu.link} key={id} className="link__margin">
                  {menu.title}
                </NavLink>
              ))}
            </NavMenu>
            <NavBtn>
              <Button primary="true" round="true" to="/trips">
                Book a flight
              </Button>
            </NavBtn>
          </Nav>
        </Container>
      </NavHeader>
    </>
  )
}

export default Header

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
