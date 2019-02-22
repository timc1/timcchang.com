import React from 'react'
import styled from '@emotion/styled'

import PageLayout from './page-layout'
import Footer from './footer'

import { GoBackLink, mq } from '../shared/global-styles'

import useIntersectionObserver from '../shared/hooks/useIntersectionObserver'

type SectionIndexProps = {
  title: string
  children: React.ReactNode
}

export default function SectionIndexLayout({
  title,
  children,
}: SectionIndexProps) {
  useIntersectionObserver({
    base: null,
    targetName: '.text',
    callback: ({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.add('show')
      }
    },
    autoDisconnect: true,
  })

  return (
    <PageLayout footerComponent={<Footer offset />}>
      <Container>
        <GoBackLink to="/" color="dark">
          <span>Home</span>
        </GoBackLink>
        <Content>
          <Title className="text">{title}</Title>
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

  ${mq[2]} {
    grid-template-columns: 1fr;
    padding-bottom: 80px;
  }
`

const Content = styled.div``

const Title = styled.h1`
  margin: var(--base-padding) 0;
  font-size: var(--font-medium);
  font-family: var(--ss-font2);
  font-weight: var(--bold);
  color: var(--color-dark-3);

  ${mq[2]} {
    margin: 40px 0 80px 0;
  }
`
