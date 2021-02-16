import styled from "styled-components"

export const NavHeader = styled.header`
  background: transparent;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em calc((100vw - 1200px) / 2);
  position: relative;
`

// export const Div = styled.div``

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
