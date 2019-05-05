module.exports = {
  siteMetadata: {
    title: `Product Designer and Developer in Los Angeles — Tim Chang`,
    description: `Home to my independent work and experiments. It features essays on web design, development, client work, and growth. Currently, I am a product designer & developer specializing in frontend/UI web development (React, HTML/CSS, Javascript)`,
    author: `@timcchang`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'case-studies',
        path: `${__dirname}/content/case-studies/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts-images',
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(
          `./src/components/shared/page-transition-layout.tsx`
        ),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128015210-5',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `timcchang.com`,
        short_name: `Tim Chang`,
        start_url: `/`,
        background_color: `#292E31`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: false, // Don't include favicon
      },
    },
    'gatsby-plugin-remove-serviceworker',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
