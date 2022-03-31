import React from "react"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
  margin-bottom: 35px;
`

const LocationMap = props => {
  return (
    <Container {...props}>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="800"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=San%20Antonio,%20TX&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </Container>
  )
}

export default LocationMap
