import React from 'react'
import SectionIndexLayout from '../components/shared/section-index-layout'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import { mq } from '../components/shared/global-styles'
import SEO from '../components/shared/seo'

export default function CaseStudiesIndex(data: any) {
  const studies = data.data.allMdx.edges.map((edge: any) => edge.node)
  return (
    <>
      <SEO
        title="Case Studies — Tim Chang"
        description="Overview and retrospective of independent client work at timcchang.com."
      />
      <SectionIndexLayout title="Case Studies">
        <CaseStudies>
          {studies.map((study: any, index: number) => (
            <CaseStudy key={study.id} className="text">
              <Link to={study.fields.slug}>
                <Title>{study.frontmatter.title}</Title>
                <Subtitle>{study.frontmatter.subtitle}</Subtitle>
                <Breadcrumbs>
                  {study.frontmatter.breadcrumbs.map((bc: string) => (
                    <li key={bc}>{bc}</li>
                  ))}
                </Breadcrumbs>
                <Number>
                  {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}.
                </Number>
              </Link>
            </CaseStudy>
          ))}
        </CaseStudies>
      </SectionIndexLayout>
    </>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { regex: "/case-study/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 280)
          frontmatter {
            title
            subtitle
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

const Number = styled.p`
  margin: 0;
  grid-column: 1;
  grid-row: 2;
  font-family: var(--ss-font2);
  font-weight: var(--bold);
  font-size: var(--font-x-small);
  color: var(--color-dark-1);
`

const Title = styled.h2`
  margin: 0;
  grid-column: 2;
  grid-row: 2;
  font-size: var(--font-x-large);
  font-weight: var(--medium);
  color: var(--color-black);
`

const Subtitle = styled.p`
  margin: 0;
  grid-row: 3;
  grid-column: 2;
  font-size: var(--font-medium);
  color: var(--color-dark-1);
`

const Breadcrumbs = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  font-size: var(--font-x-small);
  font-weight: var(--medium);
  color: var(--color-dark-1);
  text-transform: uppercase;

  > li {
    font-family: var(--ss-font2);
    color: var(--color-dark-1);
  }

  > li:not(:last-of-type) {
    padding-right: var(--base-gap);
  }
`

const CaseStudy = styled.li`
  > a {
    display: grid;
    grid-template-columns: var(--font-large) 1fr;
    align-items: center;
    grid-gap: var(--base-gap);
    text-decoration: none;
  }

  ${mq[2]} {
    > a {
      grid-template-columns: 1fr;
    }
    ${Number} {
      grid-row: 1;
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

    ${Number}, ${Title}, ${Subtitle}, ${Breadcrumbs} {
      grid-column: unset; 
    }
  }
`

export const CaseStudies = styled.ul`
  margin: 0 0 0 calc((var(--font-large) * -1) - var(--base-gap));
  padding: 0;
  list-style: none;
  max-width: 850px;

  ${CaseStudy}:not(:first-of-type) {
    margin-top: var(--base-padding);
  }

  ${mq[2]} {
    margin-left: 0;

    ${CaseStudy}:not(:first-of-type) {
      margin-top: 80px;
    }
  }
`
