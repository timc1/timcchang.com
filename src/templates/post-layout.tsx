import React from 'react'
import { graphql } from 'gatsby'
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

// FIXME: Typescript seeming to not work with gastby-node when building pages.
//type PageTemplateType = {
//  data: {
//    mdx: {
//      id: string
//      frontmatter: {
//        title: string
//        subtitle: string
//        keywords: string[]
//        breadcrumbs: string[]
//        image: string
//      }
//      code: {
//        body: string
//      }
//    }
//  }
//}

// @ts-ignore
export default function PageTemplate({ data: { mdx } }) {
  return (
    <Container>
      <Header>
        <Title>{mdx.frontmatter.title}</Title>
        <Subtitle>{mdx.frontmatter.subtitle}</Subtitle>
        <Breadcrumbs>
          {/* 
            FIXME: Typescript seeming to not work with gastby-node when building pages.
            // @ts-ignore */}
          {mdx.frontmatter.breadcrumbs.map(bc => (
            <li key={bc}>{bc}</li>
          ))}
        </Breadcrumbs>
      </Header>
      <BannerImageContainer>
        <Img
          fluid={mdx.frontmatter.image.childImageSharp.fluid}
          css={css`
            position: absolute !important;
            top: 0;
            left: calc(var(--base-gap) * -1);
            right: calc(var(--base-gap) * -1);
            bottom: 0;
          `}
        />
      </BannerImageContainer>

      <Content>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Content>
    </Container>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        subtitle
        keywords
        breadcrumbs
        image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`

const Container = styled.div`
  --padding: 12%;
  padding: var(--base-gap);
`

const Header = styled.section`
  max-width: 1300px;
  margin: auto;
  padding: var(--padding) 0 calc(var(--padding) / 2) 0;
`

const Title = styled.h1`
  margin: 0;
  font-size: var(--font-x-large);
  font-family: var(--ss-font2);
  color: var(--color-dark-0);
  max-width: 750px;
`

const Subtitle = styled.p`
  margin: var(--base-gap) 0 0 0;
  font-size: var(--font-medium);
  font-family: var(--ss-font);
  font-weight: var(--regular);
  color: var(--color-dark);
  max-width: 750px;
`

const Breadcrumbs = styled.ul`
  margin: calc(var(--base-gap) * 2) 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  font-size: var(--font-x-small);
  font-weight: var(--regular);
  text-transform: uppercase;

  > li {
    color: var(--color-dark-0);
    font-family: var(--ss-font2);
  }
  > li:first-of-type {
    font-weight: var(--bold);
    color: var(--color-dark-1);
  }
  > li:not(:last-of-type) {
    padding-right: var(--base-gap);
    &::after {
      content: '·';
      padding-left: var(--base-gap);
    }
  }
`

const BannerImageContainer = styled.section`
  position: relative;
  padding-top: 40%;
`

const Content = styled.section`
  position: relative;
  max-width: 700px;
  margin: auto;
  padding: calc(var(--padding) / 2) 0;
  font-size: var(--font-small);
  color: var(--color-dark-0);
`
