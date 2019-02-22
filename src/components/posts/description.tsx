import React from 'react'
import styled from '@emotion/styled'

type ContentProps = {
  section: string
  title: string
  content: string
}

export default function content({ section, title, content }: ContentProps) {
  return (
    <Container>
      <SectionText>{section}</SectionText>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: var(--post-content-margin) 1fr;
  grid-gap: var(--base-gap);
  align-items: center;
  margin: var(--post-content-margin) 0;
`

const SectionText = styled.span`
  font-weight: var(--medium) !important;
  font-size: var(--font-x-small) !important;
  color: var(--color-dark-1);
`

const Title = styled.h2`
  margin: 0;
  grid-column: 2;
  grid-row: 1;
  font-size: var(--font-small) !important;
  font-weight: var(--medium) !important;
  font-family: var(--ss-font2);
  text-transform: uppercase;
`

const Content = styled.p`
  margin: 0;
  grid-column: 2;
  grid-row: 2;
  font-size: var(--font-small);
  color: var(--color-dark-1);
`
