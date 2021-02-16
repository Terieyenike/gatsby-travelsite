import React from "react"
import { GlobalStyle } from "./styles/GlobalStyle"
import Header from "./Header/Header"
import FooterPage from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <FooterPage />
    </>
  )
}

export default Layout
