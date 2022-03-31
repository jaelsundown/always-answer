import React from 'react'
import styled from 'styled-components'

import FeaturedPostsRow from './FeaturedPostsRow'

const demoData = [
  { date: 'January 19, 2022', title: "The 7 Key Qualities of a Reliable Customer Support Agent" },
  { date: 'January 16, 2022', title: "5 Qualities to Look for in a Remote Receptionist" },
  { date: 'January 10, 2022', title: "Five Signs Your Business Needs a Live Answering Service" },
]

const Section = styled.section`
  height: 494px;
  display: flex;
  flex-direction: row;
  background-color: #D9584B;
  align-items: center;
  justify-content: space-around;
`

const BlogUpdatesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  color: white;
  font-family: Nanum Myeongjo;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: 0em;
  text-align: center;
`

const BlogSummarySection = () => {
  return (
    <Section>
      <BlogUpdatesContainer>
        <Heading>Upcoming News & Blog Posts</Heading>
        <FeaturedPostsRow featuredPosts={demoData} />
      </BlogUpdatesContainer>
    </Section>
  )
}

export default BlogSummarySection
