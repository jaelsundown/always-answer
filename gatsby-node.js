const { dump, dd } = require('dumper.js')
const path = require(`path`)
const chunk = require(`lodash/chunk`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Always Answer site has been precompiled and delivered on ${url ||'localhost:8000'}`)
}

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Setting up queries from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)
  const wpPages = await getWpPages(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!posts.length || !wpPages.length) {
    return
  }

  // Reducing data store into sections
  const servicePages = await getServicePages({ wpPages, reporter: gatsbyUtilities.reporter })
  const industryPages = await getIndustryPages({ wpPages, reporter: gatsbyUtilities.reporter })
  const locationPages = await getLocationPages({ wpPages, reporter: gatsbyUtilities.reporter })
  dump(servicePages)
  // GraphQL Queries to be dependency injected
  const postsPerPageQuery = await gatsbyUtilities.graphql(/* GraphQL */`{ wp { readingSettings { postsPerPage } } }`)
  const { postsPerPage } = postsPerPageQuery.data.wp.readingSettings
  const { createPage } = gatsbyUtilities.actions

  try {
    // Create Blog Post Pages
    await createIndividualBlogPostPages({ posts, createPage })
    await createBlogPostArchive({ posts, postsPerPage, createPage })

    // Create Industry Pages
    await createIndustriesArchive({ industryPages, createPage })

    // Create Location Pages
    await createLocationsArchive({ locationPages, createPage })

    // Create Service Pages
    await createServicesArchive({ servicePages, createPage })
  } catch (error) {
    dump(error)
  }
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */`
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPost.edges
}

async function getWpPages({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    query WpPages {
      allWpPage(sort: { fields: [title], order: DESC }) {
        edges {
          pages: node {
            id,
            title,
            uri,
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your service pages`,
      graphqlResult.errors
    )
    return
  }

  return graphqlResult.data.allWpPage.edges
}

async function getServicePages({ wpPages, reporter }) {
  try {
    return wpPages.reduce((accumulator, curPage) => {
      dump(curPage)
      const uri = curPage.uri.toLowerCase()
      if (uri.includes("live-answering-service") || uri.includes("call-center")) {
        return accumulator.push(curPage)
      }
      return accumulator
    }, [])
  } catch (error) {
    reporter.panicOnBuild(
      `There was an error building service pages array`,
      error
    )
  }
}

async function getIndustryPages({ wpPages, reporter }) {
  try {
    return wpPages.reduce((accumulator, curPage) => {
      const uri = curPage.uri.toLowerCase()
      if (uri.includes("industry")) {
        return accumulator.push(curPage)
      }
      return accumulator
    }, [])
  } catch (error) {
    reporter.panicOnBuild(
      `There was an error building industry pages array`,
      error
    )
  }
}

async function getLocationPages({ wpPages, reporter }) {
  try {
    return wpPages.reduce((accumulator, curPage) => {
      const uri = curPage.uri.toLowerCase()
      if (uri.includes("-answering-service")) {
        return accumulator.push(curPage)
      }
      return accumulator
    }, [])
  } catch (error) {
    reporter.panicOnBuild(
      `There was an error building location pages array`,
      error
    )
  }
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, createPage }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/blog/blog-post.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, postsPerPage, createPage }) {
  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/media/blog/` : `/media/blog/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(
          `./src/templates/blog/blog-post-archive.js`
        ),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

// Creating Service Routes
async function createServicesArchive({ pages, createPage }) {
  return Promise.all(
    pages.map((page) => {
      const { uri } = page
      createPage({
        path: `/services/${uri}`,

        // use the services archive template as the page component
        component: path.resolve(
          `./src/templates/services/services-overview-archive/index.js`
        ),
      })
    })
  )
}

async function createServicesArchive({ pages, createPage }) {
  return Promise.all(
    pages.map((page) => {
      const { uri } = page
      createPage({
        path: `/services/${uri}`,

        // use the blog post archive template as the page component
        component: path.resolve(
          `./src/templates/services/service-page/index.js`
        ),
      })
    })
  )
}

// Creating Industry Routes
async function createIndustriesArchive({ pages, createPage }) {
  return Promise.all(
    pages.map((page) => {
      const { uri } = page
      createPage({
        path: `${uri}`,

        // use the blog post archive template as the page component
        component: path.resolve(
          `./src/templates/industries/industries-overview-archive.js`
        ),
      })
    })
  )
}

// Creating Location Routes
async function createLocationsArchive({ pages, createPage }) {
  return Promise.all(
    pages.map((page) => {
      const { uri } = page
      createPage({
        path: `/locations/${uri}`,

        // use the blog post archive template as the page component
        component: path.resolve(
          `./src/templates/locations/locations-overview-archive.js`
        ),
      })
    })
  )
}
