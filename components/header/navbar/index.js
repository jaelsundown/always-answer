import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import NavData from '../../../data'
import { Button } from '../../common'
import LinkRenderer from '../../common/utility/linkRenderer'
import ModalDropdown from './modalDropdown'

const ContactNumber = styled.p`
  font-family: Knockout;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: right;
  color: #D9584B;
  margin: 0;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  textAlign: center;
  margin: 34px 65px;
  z-index: auto;
`

const { about, contact, services, industries } = NavData

const Navbar = () => (
  <NavContainer>
    <LinkRenderer url="/">
      <StaticImage src='../../../assets/images/AlwaysAnswer_Logo.png' alt="Always Answer logo; graphic includes a speech bubble with a headset attachment partially encircling the company name." />
    </LinkRenderer>
    <ModalDropdown title="ABOUT" url="/about/our-company" navOptions={about} />
    <ModalDropdown title="SERVICES" url="/services" navOptions={services} />
    <ModalDropdown title="INDUSTRIES" url="/industries" navOptions={industries} />
    <ModalDropdown title="CONTACT" url="/contact" navOptions={contact} />

    <LinkRenderer url="tel:+18006069898">
      <ContactNumber>+1-800-606-9898</ContactNumber>
    </LinkRenderer>
    <Button buttonStyles={{ color: 'white' }} onClick={() => navigate('/quote') }>
      GET A QUOTE
    </Button>
  </NavContainer>
)

export default Navbar