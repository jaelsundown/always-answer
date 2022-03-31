import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../../components/default/bio"
import Layout from "../../components/default/layout"
import Seo from "../../components/default/seo"
import Post from "../../components/PostsTemplate/Post"

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div`
  background: #434AB0;
  width: 60%;
  height: 2px;
  margin: 50px auto;
  opacity: 50%;
`

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="All posts" />
      <Container>
        {posts.map((post, i) => {
          const title = post.title
          return (
            <div key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Post image={post.featuredImage} uri={post.uri} title={title} date={post.date} description={post.excerpt} flip={i % 2 === 0} />
              </article>
              { i === posts.length - 1 ? null : <Divider /> }
            </div>
          )
        })}
      </Container>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
  }
`
