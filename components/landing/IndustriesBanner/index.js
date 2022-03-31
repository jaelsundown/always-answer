import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import { Button } from '../../common'

const IndustriesSectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: rgba(67, 74, 176, 0.88);
  background-repeat: no-repeat;
  background-origin: border-box;
  align-items: center;
  justify-content: space-around;
  min-heigh: 400px;
  padding-bottom: 40px;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 400px;
  padding: 0 120px;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

const FeaturedIndustryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 15%;
`

const Title = styled.h3`
  color: white;
  font-family: Nanum Myeongjo;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
`

const FeaturedIndustryTitle = styled.p`
  color: white;
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: center;
`

const FeaturedIndustryText = styled.p`
  color: white;
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: center;
`

const IndustriesBanner = () => {
  return (
    <IndustriesSectionContainer>
      <ColumnContainer>
        <Title>
          We have a solution for every industry need.
        </Title>
        <RowContainer>
          <FeaturedIndustryContainer>
            <FeaturedIndustryTitle>
              Medical
            </FeaturedIndustryTitle>
            <FeaturedIndustryText>
              When emergencies arise, we are there with a friendly, helpful voice in their time of need.
            </FeaturedIndustryText>
          </FeaturedIndustryContainer>
          <FeaturedIndustryContainer>
            <FeaturedIndustryTitle>
              Property Management
            </FeaturedIndustryTitle>
            <FeaturedIndustryText>
              We are ready to take calls and offer your clients to set appointments with you and your business.
            </FeaturedIndustryText>
          </FeaturedIndustryContainer>
          <FeaturedIndustryContainer>
            <FeaturedIndustryTitle>
              Trade Services
            </FeaturedIndustryTitle>
            <FeaturedIndustryText>
              Worried about missing another important business call? A live virtual receptionist service can help eliminate this worry.
            </FeaturedIndustryText>
          </FeaturedIndustryContainer>
          <Button
            onClick={() => navigate('/industries')}
            buttonStyles={{ width: 'auto', padding: '0 25px', backgroundColor: 'white' }}
            textStyles={{ color: '#434AB0' }}
          >
            SEE OUR SUPPORTED INDUSTRIES
          </Button>
        </RowContainer>
      </ColumnContainer>
    </IndustriesSectionContainer>
  )
}

export default IndustriesBanner
