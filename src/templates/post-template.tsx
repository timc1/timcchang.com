import React from 'react'
// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import SEO from '../components/shared/seo'
import { graphql, Link } from 'gatsby'
import useIntersectionObserver from '../components/shared/hooks/useIntersectionObserver'

import PageLayout from '../components/shared/page-layout'
import Footer from '../components/shared/footer'
import { GoBackLink, mq, rmq } from '../components/shared/global-styles'

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
    <PageLayout footerComponent={<Footer />}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.subtitle}
        keywords={mdx.frontmatter.keywords}
      />
      <PageNav>
        <GoBackLink
          to={`${data.location.pathname.split('/')[1]}/`}
          color="dark"
        >
          <span>Back</span>
        </GoBackLink>
      </PageNav>
      {mdx.frontmatter.image && (
        <BannerPhoto>
          <Img
            fluid={mdx.frontmatter.image.childImageSharp.fluid}
            css={css`
              position: absolute !important;
              top: 0;
              left: var(--base-padding);
              right: var(--base-padding);
              border-radius: var(--base-radius);
              bottom: 0;
            `}
          />
        </BannerPhoto>
      )}
      <article>
        <Header>
          <div
            css={{
              position: 'relative',
            }}
          >
            <Breadcrumbs>
              <Date>{mdx.frontmatter.date}</Date>
              {/*
              // @ts-ignore */}
              {mdx.frontmatter.breadcrumbs.map(bc => (
                <li key={bc}>{bc}</li>
              ))}
            </Breadcrumbs>
          </div>
          <Title>{mdx.frontmatter.title}</Title>
          <Subtitle>{mdx.frontmatter.subtitle}</Subtitle>
        </Header>
        <Content>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </Content>
      </article>
      {/* 
         // @ts-ignore */}
      <ReadNext>
        <Suggestion to={previous.node.fields.slug}>
          <Direction>Previous</Direction>
          <Breadcrumbs>
            {/* 
               // @ts-ignore */}
            {previous.node.frontmatter.breadcrumbs.map(bc => (
              <li key={bc}>{bc}</li>
            ))}
          </Breadcrumbs>
          <p>{previous.node.frontmatter.title}</p>
        </Suggestion>
        <Suggestion to={next.node.fields.slug}>
          <Direction>Up Next</Direction>
          <Breadcrumbs>
            {/* 
               // @ts-ignore */}
            {next.node.frontmatter.breadcrumbs.map(bc => (
              <li key={bc}>{bc}</li>
            ))}
          </Breadcrumbs>
          <p>{next.node.frontmatter.title}</p>
        </Suggestion>
      </ReadNext>
    </PageLayout>
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
        date
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

const PageNav = styled.nav`
  padding: var(--base-padding) 0 calc(var(--base-padding) / 3)
    var(--base-padding);
`

const BannerPhoto = styled.div`
  position: relative;
  padding-top: 35%;
`

const Title = styled.h1`
  margin: 0;
  font-size: var(--font-large);
  font-weight: var(--medium);
  max-width: 600px;
`

const Subtitle = styled.p`
  margin: calc(var(--base-gap) / 2) 0 0 0;
  font-size: var(--font-medium);
  font-weight: var(--medium);
  color: var(--color-dark-1);
  max-width: 800px;
`

const Header = styled.section`
  padding: calc(var(--base-padding) / 2) var(--base-padding);
  max-width: 900px;
  width: 100%;
  margin: auto;
  border-bottom: 1px solid var(--color-light-2);
  line-height: 1.6;

  ${mq[2]} {
    padding: var(--base-padding);
  }
`

const Breadcrumbs = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: var(--base-gap);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  > li {
    font-family: var(--ss-font2);
    font-size: var(--font-small);
    color: var(--color-dark-1);
    white-space: nowrap;
  }
  > li:not(:last-of-type) {
    padding-right: var(--base-gap);
  }

  + span {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 70%;
  }
`

const Date = styled.li`
  color: var(--color-dark-3) !important;
  &::after {
    content: '·';
    padding-left: var(--base-gap);
  }
`

const Content = styled.section`
  max-width: 900px;
  padding: calc(var(--base-padding) / 2) var(--base-padding);
  margin: auto;
  line-height: 1.6;
  perspective: 2000px;

  a,
  p,
  ul,
  ol,
  li {
    color: var(--color-dark-1);
    font-weight: var(--medium);
    font-size: var(--font-small);
  }

  ul,
  ol {
    margin: 1.5em 0;
  }

  ul > li {
    list-style: circle;
  }

  ol > li {
    list-style: decimal;
  }

  li {
    margin-left: var(--font-medium);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: var(--bold);
    font-size: var(--font-medium);
    color: var(--color-black);
    margin: 1.5em 0;
  }

  h1 {
    font-size: var(--font-large);
  }

  h2 {
    color: var(--color-black);
  }

  p {
    margin-top: 0;
    margin-bottom: 1.5em;
  }

  ${mq[1]} {
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
`

const Suggestion = styled(Link)`
  padding: calc(var(--base-padding) / 2) var(--base-gap);
  display: flex;
  flex-direction: column;
  place-content: center start;
  text-decoration: none;
  color: var(--color-dark);
  background: none;
  border-radius: var(--base-radius);

  font-size: var(--font-medium);

  ${mq[2]} {
    padding: 40px var(--base-padding);
  }
`

const ReadNext = styled.section`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: var(--base-gap);
  max-width: 1000px;
  margin: auto;
  border-top: 1px solid var(--color-light-2);
  padding: var(--base-padding) 0;

  ${mq[2]} {
    grid-template-columns: 1fr;
  }

  ${mq[1]} {
    ${Suggestion}:last-of-type {
      grid-row: 1;
    }
  }

  p {
    margin: 0;
  }

  ${rmq[2]} {
  // prettier-ignore
  ${Suggestion}:last-of-type {
    text-align: end;
    ${Breadcrumbs} {
      justify-content: flex-end; 
    }
  }
  }
`

const Direction = styled.span`
  text-align: center;
  margin-bottom: calc(var(--base-gap) * 2);
  margin-top: 0;
  color: var(--color-dark-3);
  font-size: var(--font-x-small);
  font-family: var(--ss-font2);
  font-weight: var(--medium);
  text-transform: uppercase;
`
