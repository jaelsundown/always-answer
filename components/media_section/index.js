import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Section = styled.section`
  height: 884px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const MediaContainer = styled.div`
  width: 770px;
  height: 419px;
  background-color: #434AB0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`


const MediaSection = () => {
  return (
    <Section>
      <MediaContainer>
        <StaticImage src="../../assets/images/Polygon.png" />
      </MediaContainer>
    </Section>
  )
}

export default MediaSection
