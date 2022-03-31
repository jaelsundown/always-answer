import React from 'react'
import { navigate } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { Button } from '..'

const ListViewContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 50px 0;
`

const ListItemContainer = styled.article`
  display: flex;
  flex-direction: ${props => (props.rowType)};
  align-items: center;
  justify-content: space-around;
  width: 1226px;
  margin-bottom: 50px;
`
const ListItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  color: #D9584B;
  font-family: Nanum Myeongjo;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`

const Description = styled.p`
  color: #03276D;
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-align: left;
  width: 500px;
  padding-bottom: 35px;
`

const ListView = ({ data }) => {
  return (
    <ListViewContainer>
      {data.map((listItem, index) => {
        const { title, url, image, description, buttonTitle } = listItem
        const rowType = index % 2 === 0 ? 'row' : 'row-reverse'
        return (
          <ListItemContainer rowType={rowType}>
            <img src={image} height={400} width={659} />
            <ListItemDetails>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Button
                onClick={() => navigate(url)}
                buttonStyles={{ backgroundColor: '#D9584B', width: '75%', height: '45px', padding: '0 15px' }}
                textStyles={{ color: '#EBD728', fontFamily: 'Knockout', fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: '17px', letterSpacing: '0.04em', textAlign: 'center' }}
              >
                {buttonTitle}
              </Button>
            </ListItemDetails>
          </ListItemContainer>
        )
      })}
    </ListViewContainer>
  )
}

export default ListView
