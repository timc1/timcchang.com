import React from 'react'
import styled from '@emotion/styled'

import PageLayout from './page-layout'
import Footer from './footer'

import { GoBackLink } from '../shared/global-styles'

type SectionIndexProps = {
  title: string
  children: React.ReactNode
}

export default function SectionIndexLayout({
  title,
  children,
}: SectionIndexProps) {
  return (
    <PageLayout footerComponent={<Footer offset />}>
      <Container>
        <GoBackLink to="/" color="dark">
          <span>Home</span>
        </GoBackLink>
        <Content>
          <Title>{title}</Title>
          {children}
        </Content>
      </Container>
    </PageLayout>
  )
}

const Container = styled.section`
  padding: var(--base-padding);
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-gap: var(--base-gap);
  align-items: start;
`

const Content = styled.div``

const Title = styled.h1`
  margin: var(--base-padding) 0;
  font-size: var(--font-medium);
  font-family: var(--ss-font2);
  font-weight: var(--bold);
  color: var(--color-dark-3);
`
