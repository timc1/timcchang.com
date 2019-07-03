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
          Hello, I'm <HighlightedLink to="/">Tim</HighlightedLink>, a software
          engineer currently based in San Francisco. I work at{' '}
          <OuterLink
            href="https://abstract.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abstract
          </OuterLink>{' '}
          alongside selective client and independent projects.
        </Header>
        <Header>
          Here are my learnings within UI design, development, and connecting
          with people.
        </Header>
      </Container>
    </PageLayout>
  )
}

const Header = styled.p`
  font-size: var(--font-large);
  line-height: var(--line-height);
  font-weight: var(--medium);
  color: var(--color-black);
`

const Container = styled.section`
  padding: var(--base-padding);

  ${Header} {
    max-width: 700px;
  }

  // prettier-ignore
  ${Header}:not(:last-of-type) {
    margin-bottom: var(--font-medium);
  }
`

const OuterLink = styled.a`
  color: var(--color-dark-2);
  transform: skewY(-8deg) rotate(8deg);
  display: inline-block;
  text-decoration: none;

  @media (hover: hover) {
    :hover {
      color: var(--color-dark-3);
    }
  }
`
