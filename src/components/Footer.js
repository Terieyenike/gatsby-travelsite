import React from "react"
import Container from "../Container"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
      <Footer>
        <Container>
          <FooterWrapper>
            <LogoText>
              <LogoLink to="/">Explor-e</LogoLink>
              <P>
                We strive to create the best <span>experiences for our</span>
                <span>customers</span>
              </P>
            </LogoText>
          </FooterWrapper>
        </Container>
      </Footer>
    </>
  )
}

export default Footer

const FooterWrapper = styled.div``
const LogoText = styled.div``
const LogoLink = styled(Link)``
const P = styled.div``
