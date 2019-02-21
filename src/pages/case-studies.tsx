import React from 'react'
import SectionIndexLayout from '../components/shared/section-index-layout'
import styled from '@emotion/styled'

export default function CaseStudiesIndex() {
  return (
    <SectionIndexLayout title="Case Studies">
      <CaseStudies>
        <CaseStudy>
          <Number>01.</Number>
          <Breadcrumbs>
            <li>AVRC</li>
            <li>2018</li>
          </Breadcrumbs>
          <Title>Reimagining Healthcare Consulting</Title>
          <Subtitle>
            Reimagining and building AVRC's website and CMS from the ground up.
          </Subtitle>
        </CaseStudy>
        <CaseStudy>
          <Number>02.</Number>
          <Breadcrumbs>
            <li>Avrek</li>
            <li>2019</li>
          </Breadcrumbs>
          <Title>Design-First Websites & Modern Law</Title>
          <Subtitle>
            Designing & developing ground up, individual attorney websites for
            Avrek Law.
          </Subtitle>
        </CaseStudy>
        <CaseStudy>
          <Number>03.</Number>
          <Breadcrumbs>
            <li>Independent</li>
            <li>2019</li>
          </Breadcrumbs>
          <Title>Storytelling Through Animation</Title>
          <Subtitle>
            Developing an animation portfolio website for designer, Alex Carey.
          </Subtitle>
        </CaseStudy>
      </CaseStudies>
    </SectionIndexLayout>
  )
}

const CaseStudy = styled.li`
  display: grid;
  grid-template-columns: var(--font-large) 1fr;
  align-items: center;
  grid-gap: var(--base-gap);
`

const CaseStudies = styled.ul`
  margin: 0 0 0 calc((var(--font-large) * -1) - var(--base-gap));
  padding: 0;
  list-style: none;
  max-width: 850px;

  ${CaseStudy}:not(:first-of-type) {
    margin-top: var(--base-padding);
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

const Title = styled.h1`
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
  font-family: var(--ss-font2);
  color: var(--color-black);
`

const Breadcrumbs = styled.ul`
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
  }

  > li:first-of-type {
    color: var(--color-dark-1);
    font-weight: var(--medium);
  }

  > li:not(:last-of-type) {
    padding-right: var(--base-gap);
  }
`
