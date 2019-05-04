import React from 'react'
import styled from '@emotion/styled'

import PageLayout from '../components/shared/page-layout'
import Footer from '../components/shared/footer'

import { HighlightedLink } from '../components/shared/global-styles'

export default function Index() {
  return (
    <PageLayout footerComponent={<Footer />}>
      <Container>
        <Header>
          Hello, I am <HighlightedLink to="/">Tim Chang</HighlightedLink>, a
          product designer and developer. Currently I am based in Los Angeles,
          CA working on selective client and independent projects.
        </Header>
        <Header>
          I design and build digital products that are accessible, performant,
          and focus on fine, minute detail.
        </Header>
        <Header>
          Over the past few years I have worked with startups to ideate
          products, define goals, and solve business problems.
        </Header>
        <Header>I enjoy sharing and documenting the process of my work.</Header>
      </Container>
    </PageLayout>
  )
}

const Header = styled.p`
  margin: 0;
  font-size: var(--font-medium);
  line-height: var(--line-height);
  font-weight: var(--medium);
  color: var(--color-dark-0);
`

const Container = styled.section`
  padding: var(--base-padding);

  ${Header} {
    max-width: 650px;
  }

  // prettier-ignore
  ${Header}:not(:last-of-type) {
    margin-bottom: 10px;
  }
`
