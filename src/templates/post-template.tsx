import React from 'react'
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import SEO from '../components/shared/seo'
import PostLayout from './post-layout'
import { graphql, Link } from 'gatsby'
import { Categories } from '../components/posts/index'
import { mq } from '../components/shared/global-styles'
import { css } from '@emotion/core'
import InfoLinks from '../components/shared/info-links'
import useIntersectionObserver from '../components/shared/hooks/useIntersectionObserver'

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
export default function PageTemplate(data) {
  const {
    pageContext: { previous, next },
    data: { mdx },
  } = data

  useIntersectionObserver({
    targetName: '.illustration',
    base: null,
    callback: ({ isIntersecting, target, observer }) => {
      if (isIntersecting) {
        target.classList.add('show')
      }
    },
    autoDisconnect: true,
  })

  return (
    <PostLayout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.subtitle}
        keywords={mdx.frontmatter.keywords}
      />
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
        {mdx.frontmatter.image_alt && (
          <Caption>
            <p>{mdx.frontmatter.image_alt}</p>
          </Caption>
        )}
      </BannerImageContainer>

      <Content>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Content>
      {/* 
         // @ts-ignore */}
      <ReadNext>
        <Suggestion to={previous.node.fields.slug}>
          <Direction>Previous</Direction>
          <Categories>
            {/* 
               // @ts-ignore */}
            {previous.node.frontmatter.breadcrumbs.map(bc => (
              <li key={bc}>{bc}</li>
            ))}
          </Categories>
          <p>{previous.node.frontmatter.title}</p>
        </Suggestion>
        <Suggestion to={next.node.fields.slug}>
          <Direction>Up Next</Direction>
          <Categories>
            {/* 
               // @ts-ignore */}
            {next.node.frontmatter.breadcrumbs.map(bc => (
              <li key={bc}>{bc}</li>
            ))}
          </Categories>
          <p>{next.node.frontmatter.title}</p>
        </Suggestion>
      </ReadNext>
      <Footer>
        <InfoLinks />
      </Footer>
    </PostLayout>
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
        image_alt
      }
      code {
        body
      }
    }
  }
`

const Header = styled.section`
  max-width: 1300px;
  margin: auto;
  padding: calc(var(--padding) / 2) 0;

  ${mq[1]} {
    padding: calc(var(--padding) / 4) 0;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: var(--font-x-large);
  font-family: var(--ss-font2);
  font-weight: var(--regular);
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

  ${mq[1]} {
    padding-top: 60%;
  }
`

const Caption = styled.div`
  position: absolute;
  margin: var(--base-gap) auto 0 auto;
  max-width: 1300px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);

  > p {
    margin: 0;
    color: var(--color-dark-3);
    font-size: var(--font-x-small);
    text-align: center;
  }
`

const Content = styled.section`
  position: relative;
  max-width: 650px;
  margin: auto;
  padding: calc(var(--padding) / 2) 0;
  font-size: var(--font-small);
  line-height: 1.5rem;
  color: var(--color-dark-1);

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--ss-font2);
    font-weight: var(--bold);
    color: var(--color-black);
  }
`

const Suggestion = styled(Link)`
  padding: calc(var(--base-gap) * 5);
  display: flex;
  flex-direction: column;
  place-content: center start;
  text-decoration: none;
  color: var(--color-dark);
  background: var(--color-light-3);
  border-radius: var(--base-radius);

  > p {
    margin: 0;
    font-size: var(--font-medium);
    font-weight: var(--medium);
    color: var(--color-dark);
  }
`

const ReadNext = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--base-gap);
  max-width: 1000px;
  margin: auto auto calc(var(--base-gap) * 5) auto;

  ${mq[1]} {
    grid-template-columns: 1fr;

    ${Suggestion}:last-of-type {
      grid-row: 1;
    }
  }
`

const Direction = styled.span`
  text-align: center;
  margin-bottom: calc(var(--base-gap) * 3);
  margin-top: calc(var(--base-gap) * -1.5);
  color: var(--color-dark-1);
  font-size: var(--font-x-small);
  font-family: var(--ss-font2);
  font-weight: var(--medium);
  text-transform: uppercase;
`

const Footer = styled.footer`
  max-width: 1000px;
  margin: auto;
  > ul {
    max-width: 1000px;
    padding-bottom: calc(var(--base-gap) * 3);
  }
`
