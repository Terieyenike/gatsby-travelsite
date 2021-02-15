import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../Container"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <TestimonialsContainer>
      <Container>
        <TopLine>Testimonials</TopLine>
        <Description>What people are saying?</Description>
        <ContentWrapper>
          <ColumnOne>
            <Testimonial>
              <IoMdCheckmarkCircleOutline
                css={`
                  color: #3fbfb8;
                  font-size: 2rem;
                  margin-bottom: 1em;
                `}
              />
              <h3>Sarah King</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                sapiente.
              </p>
            </Testimonial>
            <Testimonial>
              <FaRegLightbulb
                css={`
                  color: #f9a19b;
                  font-size: 2rem;
                  margin-bottom: 1em;
                `}
              />
              <h3>Sarah King</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                sapiente.
              </p>
            </Testimonial>
          </ColumnOne>
          <ColumnTwo>
            {data.allFile.edges.map((image, id) => (
              <Images
                key={id}
                fluid={image.node.childImageSharp.fluid}
                alt="testimonials"
              />
            ))}
          </ColumnTwo>
        </ContentWrapper>
      </Container>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 2em calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  /* padding-left: 2em; */
  margin-bottom: 0.75em;
`

const Description = styled.p`
  text-align: start;
  /* padding-left: 2em; */
  margin-bottom: 1em;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* padding: 0 2rem; */

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`

const Testimonial = styled.div`
  padding-top: 1em;
  /* padding-right: 2em; */

  h3 {
    margin-bottom: 1em;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2em;
  gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: auto;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
