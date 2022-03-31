import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import BackgroundDesktop from '../../../assets/images/BackgroundDesktop.png'
import { Button } from "../../common"

const SubTitle = styled.h4`
  color: #434AB0;
  font-family: "Knockout";
  font-size: 24px;
  font-weight: 400;
  line-height: 22.08px;
  letter: 4%;
  margin: auto 0;
`

const Title = styled.h2`
  font-family: "Nanum Myeongjo";
  font-weight: 400;
  font-size: 80px;
  line-height: 106%;
  font-style: normal;
  color: #D9584B;
  margin: auto 0;
`

const BodyText = styled.p`
  color: #03276D;
  font-family: Arimo;
  font-size: 16px;
  line-height: 24px;
  letter: 4%;
  margin: auto 0;
`

const IntroPanel = styled.section`
  display: flex;
  flex-direction: row;
  max-height: 1250px;
  margin: auto;
  background-image: url(${BackgroundDesktop});
  background-origin: content-box;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
  z-index: auto;
  width: 75vw; 
  @media screen and (min-width: 2540px) {
    width: 65vw;
  }
`

const InfoPanel = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 750px;
  align-items: baseline;
  justify-content: space-evenly;
  max-width: 27vw;
  @media screen and (min-width: 2540px) {
    max-width: 30vw;
  }
`

const ImagePanel = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const LandingIntro = () => {
  return (
    <IntroPanel>
      <InfoPanel>
        <SubTitle>
          Always Answer
        </SubTitle>
        <Title>
          The People You Need On Call 24/7.
        </Title>
        <BodyText>
          Don't let an influx of calls or high answering service pricing put your business on hold! Managing the constant flow of communication is key to the success of small businesses. At Always Answer, we've been leading the way in 
          exemplary answering services for small businesses and call center services since 1975! That's over 45 years of live call answering services! And with our transparent and easy answering service pricing, there's a reason we have 
          the shining reputation we have!
          <br /> <br />
          From our innovative solutions and user-friendly software, to our personable staff, customized options, and low answering service pricing, we offer you everything you need in a call center, virtual receptionist, or after-hours answering 
          service. Our live call answering service for small business can make your callers feel valued, while still letting you get your work done!
        </BodyText>
        <Button
          onClick={() => navigate('/services')}
          buttonStyles={{ backgroundColor: "#D9584B", width: '200px', height: '60px', padding: '0 10px' }}
          textStyles={{ color: "#EBD728", fontSize: '16px', fontWeight: 700 }}
        >
          SEE OUR SERVICES
        </Button>
      </InfoPanel>
      <ImagePanel>
        {/* <StaticImage src={{}} />
        <StaticImage src={{}} /> */}
      </ImagePanel>
    </IntroPanel>
  )
}

export default LandingIntro
