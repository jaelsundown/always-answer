import React from "react"
import styled from "styled-components"
import Header from "../../components/header"
import Footer from "../../components/footer"
import LocationMap from "../../components/locations/LocationMap"
import TitleSection from "../../components/locations/TitleSection"
import ContactUs from "../../components/locations/ContactUs"
import OtherLocationsBanner from "../../components/locations/OtherLocationsBanner"
import IndustriesOverviewBanner from "../../components/locations/IndustriesOverviewBanner"

const Container = styled.div``

const links = [{ url: '/locations/dallas', text: 'Dallas'}, { url: '/locations/sanantonio', text: 'San Antonio'}, { url: '/locations/amirillo', text: 'Amirillo'}]

const LocationsArchive = props => {
  return (
    <Container {...props}>
      <Header />
      <TitleSection />
      <LocationMap style={{ margin: "0 auto", marginBottom: "50px" }} />
      <ContactUs
        header="Contact Us"
        phone="+1-800-606-9898"
        style={{ marginBottom: "50px" }}
      >
        Our friendly staff will be happy to talk to you and learn about your
        business needs.
      </ContactUs>
      <OtherLocationsBanner
        textRight
        header="Texas Locations"
        imgUrl="../../assets/images/citybridge@2x.png"
        links={links}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a,
        convallis sed sagittis, amet interdum eu egestas in. Convallis fringilla
        placerat bibendum vitae faucibus. Dolor donec nunc, sit amet cursus.
        Tempor augue gravida arcu pellentesque massa.
      </OtherLocationsBanner>
      <OtherLocationsBanner
        header="Other Locations"
        imgUrl="../../assets/images/buildingtops@2x.png"
        links={links}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a,
        convallis sed sagittis, amet interdum eu egestas in. Convallis fringilla
        placerat bibendum vitae faucibus. Dolor donec nunc, sit amet cursus.
        Tempor augue gravida arcu pellentesque massa.
      </OtherLocationsBanner>
      <IndustriesOverviewBanner />
      <Footer />
    </Container>
  )
}

export default LocationsArchive
