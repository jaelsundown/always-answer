import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
`

const InternalLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const LinkRenderer = ({ children, url, linkStyle, ...rest }) => {
  if (url.includes("https://") || url.includes("tel")) {
    return (
      <ExternalLink href={url} style={linkStyle} {...rest}>
        {children}
      </ExternalLink>
    )
  }

  return (
    <InternalLink to={url} style={{ color: 'white', textDecoration: 'none', ...linkStyle}} {...rest}>
      {children}
    </InternalLink>
  )
}

export default LinkRenderer
