import React from 'react'

import { Container } from '../components/common'
import Body from '../components/body'
import Footer from '../components/footer'
import Header from '../components/header'
import { AboutUsSection, BannerSection, IndustriesBanner, LandingIntro,  } from '../components/landing'
import MediaSection from '../components/media_section'
import BlogSummarySection from '../components/common/BlogSummarySection'
import LocationsSummarySection from '../components/location_summary_section'
import Seo from '../components/default/seo'

const landingContainer = {
  display: 'flex',
  flexDirection: 'column',
  zIndex: 'auto',
}

const Landing = () => {
  
  return (
    <Container styles={landingContainer}>
      <Seo title="Always Answer" />
      <Header />
      <Body>
        <LandingIntro />
        <BannerSection bannerColorPrimary='rgba(217, 88, 75, 0.88)' bannerColorSecondary='rgba(67, 74, 176, 0.88)' />
        <AboutUsSection />
        <IndustriesBanner />
        <MediaSection />
        <BlogSummarySection />
        <LocationsSummarySection />
      </Body>
      <Footer />
    </Container>
  )
}

export default Landing
