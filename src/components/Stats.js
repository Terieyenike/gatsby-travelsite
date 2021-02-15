import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Over 100 destinations",
    desc: "Travel to over 100 amazing places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #29bf12;
        `}
      />
    ),
    title: "Over 100 destinations",
    desc: "Travel to over 100 amazing places",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #db2763;
        `}
      />
    ),
    title: "Over 100 destinations",
    desc: "Travel to over 100 amazing places",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #f18f01;
        `}
      />
    ),
    title: "Over 100 destinations",
    desc: "Travel to over 100 amazing places",
  },
]

const Stats = () => {
  return (
    <div>
      <StatsContainer>
        <Heading>Why Choose Us?</Heading>
        <Wrapper>
          {StatsData.map((item, id) => {
            return (
              <StatsBox key={id}>
                <Icon>{item.icon}</Icon>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
              </StatsBox>
            )
          })}
        </Wrapper>
      </StatsContainer>
    </div>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 75rem;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em calc((100vw - 1300px) / 2);
`

const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 1em;
  /* padding: 0 2em; */
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: auto;
  }
`
const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2em;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1em;
`

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5em;
`

const Description = styled.div``
