import React from "react"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: inherit;
`

const Container = ({ children, styles }) => (
    <FlexContainer style={styles}>
      {children}
    </FlexContainer>
)

export default Container
