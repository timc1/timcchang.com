const { createFilePath } = require('gatsby-source-filesystem')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here:q
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix
      value: `${value}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  code {
                    scope
                  }
                  id
                  excerpt(pruneLength: 280)
                  frontmatter {
                    title
                    breadcrumbs
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const edges = result.data.allMdx.edges

        // We'll call `createPage` for each result
        edges.forEach(({ node }, index) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: componentWithMDXScope(
              path.resolve(`./src/templates/post-template.tsx`),
              node.code.scope,
              __dirname
            ),
            // We can use the values in this context in
            // our page layout component
            context: {
              id: node.id,
              previous: edges[index - 1]
                ? edges[index - 1]
                : edges[edges.length - 1],
              next: edges[index + 1] ? edges[index + 1] : edges[0],
            },
          })
        })
      })
    )
  })
}
