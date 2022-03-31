import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 587px;
  max-width: 800px;
  margin-bottom: 50px;
`

const Heading = styled.h2`
  color: #D9584B;
  font-family: Nanum Myeongjo;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: center;
`

const Subtext = styled.p`
  color: #03276D;
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  min-width: 75%;
`

const LineSeparator = styled.div`
  width: 303px;
  border: 1px solid #434AB0;
`

const TitleSection = () => {
  return (
    <Section>
      <ContentContainer>
        <Heading>Emergency Dispatch</Heading>
        <Subtext>
        When emergencies arise, we are there with a friendly, helpful voice. 
        With our 24-hour emergency services dispatcher, your callers will reach a live voice on the other end of the line. 
        Have peace of mind knowing we will immediately transmit the message in a clear and accurate manner to you or your staff.
        </Subtext>
        <LineSeparator />
      </ContentContainer>
      <StaticImage src='../../assets/images/services_emergency_dispatch.png' height={500} width={800} />
    </Section>
  )
}

export default TitleSection
