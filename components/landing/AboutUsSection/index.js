import React from 'react'
import styled from 'styled-components'

import LinkRenderer from '../../common/utility/linkRenderer'
import AboutUsSectionBG from '../../../assets/images/AboutUsSectionBG.png'

const AboutUsContianer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background-image: url(${AboutUsSectionBG});
  background-position: bottom -225px right;
  background-repeat: no-repeat;
  background-origin: border-box;
  max-height: 820px;
  padding: 120px;
`

const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-width: 35vw;
`

const Title = styled.h2`
  font-family: "Nanum Myeongjo";
  font-weight: 400;
  font-size: 64px;
  line-height: 106%;
  font-style: normal;
  color: #D9584B;
  margin: auto 0;
`

const BodyText = styled.p`
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
`

const AboutUsSection = () => {
  return (
    <AboutUsContianer>
      <TextContainer>
        <Title>
          We are committed to Quality, Integrity & Success.
        </Title>
        <BodyText>
          All aspects of our company are intertwined. There is no pyramid or heirarch. Each part plays an important role. Our customers allow us to maintain a business. Our business allows us to employ terrific perople.
        </BodyText>
        <LinkRenderer url={'/about'} linkStyle={{ color: '#D9584B', textDecoration: 'underline' }}>
          LEARN MORE ABOUT US
        </LinkRenderer>
      </TextContainer>
    </AboutUsContianer>
  )
}

export default AboutUsSection