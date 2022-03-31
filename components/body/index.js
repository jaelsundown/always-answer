import React from "react"

const Body = ({ children, styles }) => (
  <main style={{ zIndex: 'auto', fontFamily: 'Nanum Myeongjo', fontSize: 16, color: 'black', ...styles }}>
    {children}
  </main>
)

export default Body
