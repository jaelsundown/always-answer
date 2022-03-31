import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import { Button } from "../../common"
import EllipseLB from "../../../assets/images/EllipseLB.png"
import EllipseYW from "../../../assets/images/EllipseYW.png"
import BannerPlaceholder from "../../../assets/images/banner-placeholder.png"

const Banner = styled.section`
  display: flex;
  flex-direction: row;
  background-image: url(${BannerPlaceholder}),
    linear-gradient(to right, ${props => (props.bannerColorSecondary)}, ${props => (props.bannerColorSecondary)}),
    linear-gradient(to left, ${props => (props.bannerColorPrimary)}, ${props => (props.bannerColorPrimary)}),
    url(${EllipseLB}),
    url(${EllipseYW});
  background-position: bottom 100px left 12.5%, left, right, top right, bottom left;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-origin: border-box, border-box, border-box, border-box, border-box;
  background-size: auto 435px, 40% 435px, 60% 435px, auto, auto;
  min-height: 635px;
  align-items: center;
`

const TextPanel = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 435px;
  width: 50%;
  align-items: flex-start;
  padding: 0 80px;
`

const Title = styled.h4`
  color: #FFEB3D;
  font-family: Knockout;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: left;
  margin: auto 0;
`

const HeroText = styled.h2`
  color: white;
  font-family: Nanum Myeongjo;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  margin-bottom: 2.5rem;
`

const BannerSection = ({ bannerColorPrimary, bannerColorSecondary  }) => {
  return (
    <Banner bannerColorPrimary={bannerColorPrimary} bannerColorSecondary={bannerColorSecondary}>
      <TextPanel>
        <TextContainer>
          <Title>ANSWERING SERVICES</Title>
          <HeroText>
            Our experienced staff is awaiting your call! Find out more about how we can help your business!
          </HeroText>
          <Button
            onClick={() => navigate('/services')}
            buttonStyles={{ backgroundColor: 'white', color: '#434AB0', width: 'auto' }}
            textStyles={{ fontFamily: 'Knockout', fontSize: '24px', fontStyle: 'normal', fontWeight: 700, lineHeight: '22px', letterSpacing: '0.04em', textAlign: 'center', padding: '0 25px' }}
          >
            SEE OUR ANSWERING SERVICES
          </Button>
        </TextContainer>
      </TextPanel>
    </Banner>
  )
}

export default BannerSection
