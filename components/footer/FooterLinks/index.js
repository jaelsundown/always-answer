import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import FooterNavCluster from '../FooterNavCluster'
import NavData from '../../../data'

const LinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
`

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 337px;
  max-width: 954px;
  flex-wrap: wrap;
`

const MediaLinks = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
`

const NavClusterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 337px;
`

const { about, clients, services, industries, contact, media, signup, locations } = NavData

const FooterLinks = () => (
    <LinksContainer>
      <LinkGroup>
        <FooterNavCluster title="ABOUT" url='/about/our-company' navElements={about} />
        <FooterNavCluster title="CLIENTS" url='https://extweb.answeringserviceagency.com/miteamweb/' navElements={clients} />
        <FooterNavCluster title="SERVICES" url='/services' navElements={services} />
        <FooterNavCluster title="INDUSTRIES" url='/industries' navElements={industries} />
        <FooterNavCluster title="CONTACT US" url='/contact' navElements={contact} />
        <NavClusterContainer>
          <FooterNavCluster title="MEDIA" url='/media/blog' navElements={media} />
          <FooterNavCluster title="SIGN UP" url='/sign-up' navElements={signup} />
          <FooterNavCluster title="LOCATIONS" url='/locations' navElements={locations} />
        </NavClusterContainer>
      </LinkGroup>
      <MediaLinks>
        <SocialLinks>
        <a href="https://www.facebook.com/TheCallCenter">
          <StaticImage src="../../../assets/images/f.png" alt="Facebook Logo" />
        </a>
        <a href="https://www.twitter.com/per_com">
          <StaticImage src="../../../assets/images/twitter.png" alt="Twitter Logo" />
        </a>
        <a href="https://www.linkedin.com/company/1579121/admin/">
          <StaticImage src="../../../assets/images/linked_in.png" alt="Linked-In Logo" />
        </a>
        </SocialLinks>
        <a href="https://www.naeo.org/default.aspx" style={{ marginLeft: "auto", marginRight: "auto", marginBottom: '25px', position: 'relative' }}>
          <StaticImage src="../../../assets/images/naeo_logo.png" alt="NAEO Logo" />
        </a>
        <a href="https://www.atsi.org/">
          <StaticImage src="../../../assets/images/atsi-logo.png" alt="ATSI Logo" size="sm" height={37} />
        </a>
      </MediaLinks>
    </LinksContainer>
)

export default FooterLinks
