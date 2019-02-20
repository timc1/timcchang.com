import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { rmq, mq } from '../../components/shared/global-styles'
// @ts-ignore
import arrow from '../../assets/images/arrow.svg'
import { ThemeProvider } from 'emotion-theming'

import useIntersectionObserver from '../shared/hooks/useIntersectionObserver'

type PostType = {
  node: {
    id: string
    excerpt: string
    frontmatter: {
      title: string
      subtitle: string
      keywords: string[]
      breadcrumbs: string[]
    }
    fields: {
      slug: string
    }
  }
}

export default function PostIndex({ dark }: { dark?: boolean }) {
  const container = React.useRef<HTMLUListElement>(null)

  useIntersectionObserver({
    targetName: '.post',
    base: null,
    callback: ({ isIntersecting, target, observer }) => {
      if (isIntersecting) {
        target.classList.add('show')
      }
    },
  })

  return (
    <StaticQuery
      query={graphql`
        {
          allMdx {
            edges {
              node {
                id
                excerpt(pruneLength: 280)
                frontmatter {
                  title
                  subtitle
                  keywords
                  breadcrumbs
                  date
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMdx.edges
        return (
          <ThemeProvider theme={{ dark: dark }}>
            <Ul ref={container}>
              {posts.map((post: PostType, index: number) => (
                <li key={post.node.id} className="post">
                  <PostLink to={post.node.fields.slug}>
                    <Categories>
                      <li>{index + 1 < 10 ? `0${index + 1}` : index + 1}.</li>
                      {post.node.frontmatter.breadcrumbs.map((bc: string) => (
                        <li key={bc}>{bc}</li>
                      ))}
                    </Categories>
                    <Title>{post.node.frontmatter.title}</Title>
                    <Preview>{post.node.excerpt}</Preview>
                    <ReadMore>Read more</ReadMore>
                  </PostLink>
                </li>
              ))}
            </Ul>
          </ThemeProvider>
        )
      }}
    />
  )
}

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  > .post {
    opacity: 0;
    transform: translateY(40px);
    transition: transform 800ms ease 100ms, opacity 400ms 150ms;
  }

  > .post.show {
    opacity: 1;
    transform: translateY(0);
  }

  > li:not(:last-of-type) {
    margin-bottom: 80px;
  }
`

export const Categories = styled.ul`
  list-style: none;
  margin: 0 0 var(--base-gap) 3px;
  padding: 0;
  display: flex;

  > li {
    font-size: var(--font-x-small);
    font-weight: var(--bold);
    font-family: var(--ss-font2);
    color: ${props =>
      props.theme.dark ? 'var(--color-dark-3)' : 'var(--color-dark-2)'};
    text-transform: uppercase;
  }

  > li:not(:last-of-type) {
    padding-right: 10px;
  }

  ${mq[1]} {
    margin: 0 0 var(--base-gap) 0;
  }
`

const Title = styled.h1`
  margin: 0;
  font-weight: var(--bold);
  font-size: var(--font-x-large);
  font-family: var(--ss-font2);
  font-weight: var(--regular);
  color: ${props =>
    props.theme.dark ? 'var(--color-light)' : 'var(--color-dark-0)'};
  opacity: 1;
  transition: opacity 250ms ease;
`

const Preview = styled.p`
  position: relative;
  margin: var(--base-gap) 0 0 0;
  font-size: var(--font-small);
  line-height: calc(var(--font-medium) + 0.25rem);
  color: var(--color-dark-1);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-bottom: 4px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props =>
      props.theme.dark
        ? `
    linear-gradient(
      to bottom,
      rgba(18, 21, 25, 0) 60%,
      rgba(18, 21, 25, .7)
    )
    `
        : `linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.7)
    )`};
  }
`

const ReadMore: any = styled.span`
  --arrow-width: 15px;
  position: relative;
  display: inline-block;
  margin: calc(var(--base-gap) * 2) 0 0 0;
  font-family: var(--ss-font2);
  font-size: var(--font-x-small);
  color: ${props =>
    props.theme.dark ? 'var(--color-light-2)' : 'var(--color-dark)'};
  text-transform: uppercase;
  padding-right: calc(var(--arrow-width) + 8px);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 8px;
    height: 7px;
    width: var(--arrow-width);
    background: ${props =>
      props.theme.dark ? 'var(--color-light)' : 'var(--color-dark)'};
    mask: url(${arrow}) center bottom / contain no-repeat;
    transform: translate(8px, -60%);
    transition: transform 250ms var(--cubic);
  }
`

const animateLink = keyframes`
  0% {
    transform: translate(8px, -60%);
  }
  60% {
    transform: translate(30px, -60%); 
  }
  65% {
    opacity: 0;
    transform: translate(30px, -60%); 
  }
  70% {
    transform: translate(0px, -60%); 
  }
  100% {
    transform: translate(8px, -60%); 
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
  outline: none;

  ${rmq[1]} {
    &:hover {
      ${ReadMore} {
        &::after {
          animation: ${animateLink} 400ms ease-in;
        }
      }
    }
  }

  &:active {
    ${Title} {
      opacity: 0.8;
    }
  }
`
