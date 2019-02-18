import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <main>{children}</main>
        </>
      )}
    />
  )
}

//const Header = () => <header>hi</header>

//const Footer = () => <footer>feet</footer>
