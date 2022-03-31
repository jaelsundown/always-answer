import React from 'react'
import styled from 'styled-components'

import LinkRenderer from '../../utility/linkRenderer'

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 25px auto;
  width: 90vw;
`

const FeaturedPost = styled.div`
  height: 203px;
  width: 373px;
`

const Date = styled.p`
  color: white;
  font-family: Knockout;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-align: left;
  margin: 0;
`

const Title = styled.p`
  font-family: serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`

const FeaturedPostsRow = ({ featuredPosts }) => {
  return (
    <RowContainer>
      {featuredPosts.map((featuredPost) => {
        const { date, title, url } = featuredPost
        return(
          <FeaturedPost>
            <Date>{date}</Date>
            <LinkRenderer url={"/media/blog"} linkStyle={{ ':visited': { color: '#EBD728' } }}>
              <Title>{title}</Title>
            </LinkRenderer>
          </FeaturedPost>
        )
      })}
    </RowContainer>
  )
}

export default FeaturedPostsRow
