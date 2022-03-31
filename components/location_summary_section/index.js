import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

import Data from '../../data'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 668px;
`

const LocationsContainer = styled.div`
  height: 468px;
  display: flex;
  flex-direction: column;
  `
  
  const LocationRow = styled.article`
  width: 90vw;
  height: 204px;
  margin: 25px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
`

const Title = styled.p`
  margin: 0;
  font-family: Nanum Myeongjo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
`

const Address = styled.p`
  margin: 0;
  font-family: Nanum Myeongjo;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
`

const Telephone = styled.p`
  margin: 0;
  font-family: Nanum Myeongjo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
`





const LocationsSummarySection = () => {
  const locationData = Data.locations.reduce((prev, location) => {
    location.address.includes("TX") ? prev.tx.push(location) : prev.us.push(location)
    return { ...prev }
  }, { tx: [], us: [] })
  console.log(locationData)
  return (
    <Section>
      <LocationsContainer>
        <LocationRow>
          <StaticImage src="../../assets/images/TXLocs.png" />
          {locationData.tx.map((location) => {
            const { title, address, telephone = "+1-800-606-9898" } = location
            return(
              <LocationContainer>
                <Title>{title}</Title>
                <Address>{address}</Address>
                <Telephone>{telephone}</Telephone>
              </LocationContainer>
            )
          })}
        </LocationRow>
        <LocationRow>
          <StaticImage src="../../assets/images/USLocs.png" />
          {locationData.us.map((location) => {
            const { title, address, telephone = "+1-800-606-9898" } = location
            return(
              <LocationContainer>
                <Title>{title}</Title>
                <Address>{address}</Address>
                <Telephone>{telephone}</Telephone>
              </LocationContainer>
            )
          })}
        </LocationRow>
      </LocationsContainer>
    </Section>
  )
}

export default LocationsSummarySection
