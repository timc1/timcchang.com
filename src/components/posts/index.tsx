import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { rmq } from '../../components/shared/global-styles'
// @ts-ignore
import arrow from '../../assets/images/arrow.svg'

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

export default function PostIndex() {
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
          <Ul>
            {posts.map((post: PostType, index: number) => (
              <li key={post.node.id}>
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
        )
      }}
    />
  )
}

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  > li:not(:last-of-type) {
    margin-bottom: 80px;
  }
`

export const Categories = styled.ul`
  list-style: none;
  margin: 0 0 var(--base-gap) 0;
  padding: 0;
  display: flex;

  > li {
    font-size: var(--font-x-small);
    font-weight: var(--bold);
    font-family: var(--ss-font2);
    color: var(--color-dark-2);
    text-transform: uppercase;
  }

  > li:not(:last-of-type) {
    padding-right: 10px;
  }
`

const Title = styled.h1`
  margin: 0 0 0 -3px;
  font-weight: var(--bold);
  font-size: var(--font-x-large);
  font-family: var(--ss-font2);
  font-weight: var(--regular);
  color: var(--color-dark-0);
  opacity: 1;
  transition: opacity 250ms ease;
`

const Preview = styled.p`
  position: relative;
  margin: var(--base-gap) 0 0 0;
  font-size: var(--font-small);
  line-height: var(--font-medium);
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
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.7)
    );
  }
`

const ReadMore: any = styled.span`
  --arrow-width: 15px;
  position: relative;
  display: inline-block;
  margin: calc(var(--base-gap) * 2) 0 0 0;
  font-family: var(--ss-font2);
  font-size: var(--font-x-small);
  color: var(--color-dark);
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
    background: var(--color-dark);
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
        opacity: 0.8;
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
