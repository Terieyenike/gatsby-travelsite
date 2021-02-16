import React from "react"
import Container from "../Container"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterPage = () => {
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
            <FooterHeader>
              <H2>Contact Us</H2>
              <Ul>
                <Li>
                  <LiAnchor to="/contact" className="nav__link">
                    Contact
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/support" className="nav__link">
                    Support
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/descriptions" className="nav__link">
                    Descriptions
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/sponsorships" className="nav__link">
                    Sponsorships
                  </LiAnchor>
                </Li>
              </Ul>
            </FooterHeader>
            <FooterHeader>
              <H2>Videos</H2>
              <Ul>
                <Li>
                  <LiAnchor to="/contact" className="nav__link">
                    Submit Video
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/support" className="nav__link">
                    Ambassadors
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/descriptions" className="nav__link">
                    Agency
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/sponsorships" className="nav__link">
                    Influencer
                  </LiAnchor>
                </Li>
              </Ul>
            </FooterHeader>
            <FooterHeader>
              <H2>Social Media</H2>
              <Ul>
                <Li>
                  <LiAnchor to="/contact" className="nav__link">
                    Instagram
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/support" className="nav__link">
                    Facebook
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/descriptions" className="nav__link">
                    Youtube
                  </LiAnchor>
                </Li>
                <Li>
                  <LiAnchor to="/sponsorships" className="nav__link">
                    Twitter
                  </LiAnchor>
                </Li>
              </Ul>
            </FooterHeader>
          </FooterWrapper>
        </Container>
      </Footer>
    </>
  )
}

export default FooterPage

const Footer = styled.div`
  background: #fcfcfc;
  padding: 2em calc((100vw - 1200px) / 2);
`

const FooterWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const LogoText = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const LogoLink = styled(Link)`
  color: #087e8b;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1em;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`

const P = styled.p`
  margin-bottom: 1em;
  span {
    display: block;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`

const FooterHeader = styled.nav`
  margin-bottom: 1.5em;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`

const H2 = styled.h2`
  font-weight: 700;
  margin-bottom: 0.5em;
  @media screen and (min-width: 768px) {
    margin-bottom: 1em;
  }
`

const Ul = styled.ul``

const Li = styled.li``

const LiAnchor = styled(Link)`
  color: #0c0c0c;
  margin-top: 0.5em;
`
