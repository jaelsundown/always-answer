import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import FooterLinks from './FooterLinks'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 79px 120px;
  background-color: rgba(67, 74, 176, 0.95);
`

const Bottom = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const NewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`
  
const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`

const CallToAction = styled.h2`
  font-family: Knockout;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #EBD728;
  margin: 0;
`

const FooterSmallText = styled.p`
  font-family: Knockout;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 11px;
  letter-spacing: 0em;
  text-align: center;
  padding-left: 25px;
  color: white;
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: row;

  margin: auto;
  margin-left: 25px;
`

const NewsletterField = styled.input``

const Footer = () => (
  <FooterContainer>
    <FooterLinks />
    <NewsLetterContainer>
        <CallToAction>SIGN UP FOR OUR NEWSLETTER</CallToAction>
        <InputRow>
          <FontAwesomeIcon icon={faEnvelope} size="3x" color="white" />
          <NewsletterForm>
            <NewsletterField name="newsletter" type="email" placeholder="Your email address" />
          </NewsletterForm>
        </InputRow>
    </NewsLetterContainer>
    <Bottom>
      <StaticImage src="../../assets/images/AlwaysAnswer_Mono.png" alt="Always Answer logo; graphic includes a speech bubble with a headset attachment partially encircling the company name 'Always Answer'." />
      <FooterSmallText>
        © Copyright {new Date().getFullYear()} | Always Answer, Inc. | America's Top Choice for 24 Hour Call Services | All Rights Reserved.
      </FooterSmallText>
    </Bottom>
  </FooterContainer>
)

export default Footer
