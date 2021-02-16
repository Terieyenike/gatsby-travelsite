import React, { useState } from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../../data/MenuData"
import { Nav, NavMenu, NavBtn, NavHeader } from "./Header.style"
import Container from "../../Container"
import { Button } from "../Button/Button"
import { Link } from "gatsby"
import "../layout.css"

const Header = () => {
  const [navBar, setNavBar] = useState(false)

  const changeBg = () => {
    if (window.scrollY >= 75) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  window.addEventListener("scroll", changeBg)
  return (
    <>
      <NavHeader className={navBar ? "navbar active" : "navbar"}>
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

const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
`
