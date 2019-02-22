import React from 'react'
import SectionIndexLayout from '../components/shared/section-index-layout'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
// @ts-ignore
import arrow from '../assets/images/arrow.svg'
import { Link, graphql } from 'gatsby'
import { rmq, mq } from '../components/shared/global-styles'

export default function BlogIndex(data: any) {
  const posts = data.data.allMdx.edges.map((edge: any) => edge.node)
  console.log(posts)
  return (
    <SectionIndexLayout title="Blog">
      <Posts>
        {posts.map((post: any, index: number) => (
          <Post key={post.id}>
            <Link to={post.fields.slug} className="text">
              <Title>{post.frontmatter.title}</Title>
              <Subtitle>{post.excerpt}</Subtitle>
              <Breadcrumbs>
                {post.frontmatter.breadcrumbs.map((bc: string) => (
                  <li key={bc}>{bc}</li>
                ))}
              </Breadcrumbs>
              <Number>
                {' '}
                {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}.
              </Number>
              <ReadMore>Read more</ReadMore>
            </Link>
          </Post>
        ))}
      </Posts>
    </SectionIndexLayout>
  )
}

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { regex: "/post/" } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 280)
          frontmatter {
            title
            breadcrumbs
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export const Number = styled.p`
  margin: 0;
  grid-column: 1;
  grid-row: 2;
  font-family: var(--ss-font2);
  font-weight: var(--bold);
  font-size: var(--font-x-small);
  color: var(--color-dark-1);
`

const Title = styled.h1`
  margin: 0;
  grid-column: 2;
  grid-row: 2;
  font-size: var(--font-large);
  font-weight: var(--medium);
  color: var(--color-black);
`

const Subtitle = styled.p`
  grid-row: 3;
  grid-column: 2;
  position: relative;
  margin: 0;
  font-size: var(--font-small);
  line-height: var(--line-height);
  color: var(--color-dark-1);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Breadcrumbs = styled.ul`
  margin: 0 0 0 2px;
  padding: 0;
  list-style: none;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  font-size: var(--font-x-small);
  font-weight: var(--medium);
  color: var(--color-black);
  text-transform: uppercase;

  > li {
    font-family: var(--ss-font2);
    color: var(--color-dark-1);
  }

  > li:not(:last-of-type) {
    padding-right: var(--base-gap);
  }
`

const ReadMore = styled.span`
  grid-column: 2;
  --arrow-width: 15px;
  position: relative;
  display: inline-block;
  font-family: var(--ss-font2);
  font-size: var(--font-x-small);
  color: var(--color-dark);
  text-transform: uppercase;
  padding-right: calc(var(--arrow-width) + 8px);
  width: max-content;
  margin-top: var(--base-gap);
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
  50% {
    transform: translate(30px, -60%); 
  }
  55% {
    opacity: 0;
    transform: translate(30px, -60%); 
  }
  60% {
    transform: translate(0px, -60%); 
  }
  100% {
    transform: translate(8px, -60%); 
  }
`

const Post: any = styled.li`
  > a {
    display: grid;
    grid-template-columns: var(--font-large) 1fr;
    align-items: center;
    grid-gap: var(--base-gap);
    text-decoration: none;
    ${rmq[1]} {
      &:hover {
        ${ReadMore}::after {
          animation: ${animateLink} 500ms var(--cubic-2);
        }
      }
    }
  }

  ${mq[2]} {
   > a {
      grid-template-columns: 1fr;
    }

    ${Number} {
      grid-row: 1;
      margin-left: 0.125rem;
    }

    ${Breadcrumbs} {
      grid-row: 2; 
    }
    ${Title} {
      grid-row: 3; 
    }
    ${Subtitle}{
      grid-row: 4; 
    } 


    ${Number}, ${Title}, ${Subtitle}, ${Breadcrumbs}, ${ReadMore} {
      grid-column: unset; 
    }

    ${Number} {
      margin-left: 2px; 
    }
  }

`

export const Posts = styled.ul`
  margin: 0 0 0 calc((var(--font-large) * -1) - var(--base-gap));
  padding: 0;
  list-style: none;
  max-width: 850px;

  ${Post}:not(:first-of-type) {
    margin-top: var(--base-padding);
  }

  ${mq[2]} {
    margin-left: 0;

    ${Post}:not(:first-of-type) {
      margin-top: 80px;
    }
  }
`
