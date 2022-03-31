import React from "react"
import styled from "styled-components"
import { getImage, StaticImage } from "gatsby-plugin-image"

import Body from "../../components/body"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { BannerSection, ListView, TopBannerSection } from '../../components/common'

import data from '../../data'


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: auto;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 800px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 750px;
  min-width: 587px;
  max-width: 800px;
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
  margin: 50px 0;
`

const LineSeparator = styled.div`
  width: 303px;
  border: 1px solid #434AB0;
`

const listViewData = data.services.reduce((prev, service) => {
  const serviceType = {
    name: service.name,
    url: service.url,
    image: getImage(service.image),
    description: service.description,
    buttonTitle: service.pageTitle.toUpperCase(),
  }
  prev.push(serviceType)
  return prev
}, [])

const ServicesOverview = () => {
  return (
    <PageContainer>
      <Header />
      <Body>
        <Section>
          <ContentContainer>
            <Heading>Our Services</Heading>
            <StaticImage src='../../assets/images/services.png' height={500} width={800} />
            <Subtext>
              Always Answer has been around for decades providing the very best in
              live answering services for our community! And throughout our many years
              of service, we’ve seen (and answered) lots of questions, but whenever a
              particular question comes up regularly, we add it to our FAQs – because
              we want all of your questions answered accurately and easily.
            </Subtext>
          </ContentContainer>
          <LineSeparator />
        </Section>
        <ListView data={listViewData} />
        <BannerSection />
      </Body>
      <Footer />
    </PageContainer>
  )
}

export default ServicesOverview
