import React from "react"
import styled from "styled-components"
import bridge from "../../../assets/images/citybridge@2x.png"
import LocationLinks from "./LocationLinks"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 991px) {
    flex-direction: row;
  }
`

const ImageColumn = styled.div`
  height: 700px;
  @media screen and (min-width: 991px) {
    flex: ${props => (props.textRight ? `1 0 55%` : `1 0 50%`)};
    order: ${props => (props.textRight ? 0 : 1)};
  }
`

const TextColumn = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.textRight ? `#434AB0` : `#FFFFFF`)};
  padding: 50px;
`

const ImageContainer = styled.div`
  background-image: url(${bridge});
  height: inherit;
  width: inherit;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 70%;
  height: inherit;
  min-width: 750px;
  @media screen and (min-width: 991px) {
    flex-basis: 60%;
  }
`

const Content = styled.div`
  color: ${props => (props.textRight ? `#FFFFFF` : `#434AB0`)};
  font-family: Arimo;
  font-size: 28px;
  margin-bottom: 30px;
`

const Header = styled.h2`
  color: ${props => (props.textRight ? `#ffeb3d` : `#D9584B`)};
  font-family: Nanum Myeongjo;
  font-size: 4em;
  font-weight: 100;
  margin-bottom: 20px;
`

const OtherLocationsBanner = ({
  header,
  imgUrl,
  links,
  children,
  textRight,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ImageColumn textRight={textRight}>
        <ImageContainer url={imgUrl} />
      </ImageColumn>
      <TextColumn textRight={textRight}>
        <Center>
          <Header textRight={textRight}>{header}</Header>
          <Content textRight={textRight}>{children}</Content>
          <LocationLinks links={links} textRight={textRight} />
        </Center>
      </TextColumn>
    </Container>
  )
}

export default OtherLocationsBanner
