import styled from "styled-components"

export const ProductsContainer = styled.div`
  /* min-height: 100vh; */
  padding: 2em calc((100vw - 1300px) / 2);
  color: #fff;
`
export const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1.5em;
  color: #000;
  text-transform: capitalize;
`

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-items: center;
  padding: 0 2em;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: auto;
  }
`

export const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2em;
  @media screen and (max-width: 280px) {
    padding: 0 1em;
  }
`

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

export const ProductTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.5em;
  text-transform: capitalize;
`
