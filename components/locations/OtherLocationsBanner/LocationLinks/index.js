import React from 'react'
import styled from 'styled-components'
import LinkRenderer from '../../../common/utility/linkRenderer'

const LinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`

const LinkText = styled.span`
  display: inline-block
  min-width: 186px;
  color: ${props => props.textRight ? `#FFEB3D` : `#D9584B`};
  font-family: Knockout;
  font-size: 3em;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-right: 100px;
  
`

const links = [
  { url: "/locations/dallas", text: "Dallas" },
  { url: "/locations/sanantonio", text: "San Antonio" },
  { url: "/locations/amirillo", text: "Amirillo" },
]

// TODO: Pass links as prop
const LocationLinks = ({ linkStyle, textRight, ...rest }) => {
  return (
    <LinkContainer {...rest}>
      {links &&
        links.map(({ url, text }) => (
          <LinkRenderer url={url} linkStyle={linkStyle} {...rest}>
            <LinkText textRight={textRight}>{text}</LinkText>
          </LinkRenderer>
        ))}
    </LinkContainer>
  )
}

export default LocationLinks