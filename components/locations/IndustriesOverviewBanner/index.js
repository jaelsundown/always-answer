import React from "react"
import styled from "styled-components"
import LinkRenderer from "../../common/utility/linkRenderer"

const Container = styled.div`
  background: #d9584b;
  display: flex;
  justify-content: center;
  padding: 50px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  @media screen and (min-width: 991px) {
    padding: 61px 256px;
    flex-basis: 60%
  }
`

const Header = styled.h1`
  color: #ffeb3d;
  font-family: Nanum Myeongjo;
  font-size: 69px;
  width: 650px;
  min-width: 650px;
  margin-bottom: 0;
  font-weight: 600;
  text-align: center;
`

const ServicesList = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 45px;

  @media screen and (min-width: 991px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const TextContainer = styled.p`
  color: #ffffff;
  font-family: Arimo;
  text-align: center;
  font-size: 26px;
  font-weight: 200;
  min-width: 400px;
  @media screen and (min-width: 991px) {
    width: 400px;
    padding: 0 50px;
  }
`

const SubHeader = styled.h6`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  margin-bottom: 5px;
`

const Button = styled(LinkRenderer)`
  background: #FFFFFF;
  border-radius: 500px;
  padding: 10px;
  text-align: center;
  width: 270px;
  box-shadow: 0px 20px 19px -23px rgba(0,0,0,0.5);
  margin-bottom: 25px;
`

const ButtonText = styled.span`
    display: inline-block;
    color: #434AB0;
    font-size: 2em;
    font-weight: 600;
    font-family: Knockout;
    text-transform: uppercase;
    padding-top: 5px;
    letter-spacing: 1px;
`

const IndustriesOverviewBanner = props => {
  return (
    <Container {...props}>
      <Content>
        <Header>We have a solution for every industry need.</Header>
        <ServicesList>
          <TextContainer>
            <SubHeader>Medical</SubHeader>
            When emergencies arise, we are there with a friendly, helpful voice
            in their time of need.
          </TextContainer>
          <TextContainer>
            <SubHeader>Medical</SubHeader>
            When emergencies arise, we are there with a friendly, helpful voice
            in their time of need.
          </TextContainer>
          <TextContainer>
            <SubHeader>Medical</SubHeader>
            When emergencies arise, we are there with a friendly, helpful voice
            in their time of need.
          </TextContainer>
        </ServicesList>
        <Button url="/industries">
          <ButtonText>See all industries</ButtonText>
        </Button>
      </Content>
    </Container>
  )
}

export default IndustriesOverviewBanner
