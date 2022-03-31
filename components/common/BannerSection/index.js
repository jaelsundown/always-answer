import React from 'react'
import styled from 'styled-components'

import { Button } from '..'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.backgroundColor)};
  align-items: center;
  justify-content: space-around;
  min-height: 419px
`

const CenterContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 753px;
  align-items: center;
`

const Title = styled.p`
  color: ${props => (props.titleColor)};
  font-family: Knockout;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 0;
`

const CallToAction = styled.h1`
  font-family: Nanum Myeongjo;
  color: ${props => (props.textColor)};
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 85px;
  letter-spacing: 0em;
  text-align: center;
  margin: 25px 0;
`

const BannerSection = ({ backgroundColor = '#D9584B', titleColor = '#FFEB3D', textColor = 'white' }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <CenterContainer>
        <Title titleColor={titleColor}>Always Answer</Title>
        <CallToAction textColor={textColor}>The People You Need On Call 24/7.</CallToAction>
        <Button buttonStyles={{ backgroundColor: 'white', color: '#434AB0', fontSize: '24px'  }}>GET A QUOTE</Button>
      </CenterContainer>
    </Section>
  )
}

export default BannerSection
