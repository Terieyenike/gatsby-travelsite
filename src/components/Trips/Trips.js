import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import Container from "../../Container"
import { Button } from "../Button/Button"
import Img from "gatsby-image"
import { ImLocation } from "react-icons/im"
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductInfo,
  TextWrap,
  ProductTitle,
} from "./Trips.style"

const Trips = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            name
            button
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const getTrips = data => {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, id) => {
      tripsArray.push(
        <ProductCard key={id}>
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button
              to="#"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
      </ProductsContainer>
    </>
  )
}

export default Trips

export const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    filter: brightness(100%);
  }
`
