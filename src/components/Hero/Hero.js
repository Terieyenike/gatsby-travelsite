import React from "react"
import { Button } from "../Button/Button"
import video from "../../assets/video/Waterfall.mp4"
import { Bg, Video, Content, Items, H1, P, Container } from "./Hero.style"

const Hero = () => {
  return (
    <>
      <Container>
        <Bg>
          <Video src={video} type="video/mp4" autoPlay muted loop playsInline />
        </Bg>
        <Content>
          <Items>
            <H1>Unreal destinations</H1>
            <P>Out of this world</P>
            <Button primary="true" round="true" big="true" to="/trips">
              Travel now
            </Button>
          </Items>
        </Content>
      </Container>
    </>
  )
}

export default Hero
