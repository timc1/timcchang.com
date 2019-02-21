import React from 'react'
import SectionIndexLayout from '../components/shared/section-index-layout'
import styled from '@emotion/styled'
// @ts-ignore
import arrow from '../assets/images/arrow.svg'

export default function BlogIndex() {
  return (
    <SectionIndexLayout title="Blog">
      <CaseStudies>
        <CaseStudy>
          <Number>01.</Number>
          <Breadcrumbs>
            <li>2018</li>
            <li>Topic</li>
            <li>Topic</li>
            <li>Topic</li>
          </Breadcrumbs>
          <Title>User Scrolling Animations With React</Title>
          <Subtitle>
            Curabitur lobortis condimentum nisi eu gravida. Mauris ut finibus
            ante. Fusce pharetra scelerisque lorem non blandit. Nullam malesuada
            laoreet varius. Nullam tristique sed leo ac laoreet. Maecenas sem
            urna, dapibus sit amet posuere ut, tempus sit amet urna. Cras in
            nisi eros. Nam odio neque, pretium sit amet nunc tincidunt, vehicula
            pharetra augue. Nam at lobortis diam. Fusce sit amet fringilla nisl.
            Morbi rhoncus lacus in lorem condimentum, ac lobortis ante
            tincidunt.
          </Subtitle>
          <ReadMore>Read more</ReadMore>
        </CaseStudy>
        <CaseStudy>
          <Number>02.</Number>
          <Breadcrumbs>
            <li>Avrek</li>
            <li>2019</li>
          </Breadcrumbs>
          <Title>Design-First Websites & Modern Law</Title>
          <Subtitle>
            Curabitur lobortis condimentum nisi eu gravida. Mauris ut finibus
            ante. Fusce pharetra scelerisque lorem non blandit. Nullam malesuada
            laoreet varius. Nullam tristique sed leo ac laoreet. Maecenas sem
            urna, dapibus sit amet posuere ut, tempus sit amet urna. Cras in
            nisi eros. Nam odio neque, pretium sit amet nunc tincidunt, vehicula
            pharetra augue. Nam at lobortis diam. Fusce sit amet fringilla nisl.
            Morbi rhoncus lacus in lorem condimentum, ac lobortis ante
            tincidunt. g & developing ground up, individual attorney websites
            for Avrek Law.
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
            Curabitur lobortis condimentum nisi eu gravida. Mauris ut finibus
            ante. Fusce pharetra scelerisque lorem non blandit. Nullam malesuada
            laoreet varius. Nullam tristique sed leo ac laoreet. Maecenas sem
            urna, dapibus sit amet posuere ut, tempus sit amet urna. Cras in
            nisi eros. Nam odio neque, pretium sit amet nunc tincidunt, vehicula
            pharetra augue. Nam at lobortis diam. Fusce sit amet fringilla nisl.
            Morbi rhoncus lacus in lorem condimentum, ac lobortis ante
            tincidunt. g & developing ground up, individual attorney websites
            for Avrek Law.
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
