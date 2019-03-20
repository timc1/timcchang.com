import React from 'react'
import styled from '@emotion/styled'

type ScopeProps = {
  background: string
  scope: string[]
}

export default function Scope({ background, scope }: ScopeProps) {
  return (
    <Container>
      <Header>Background</Header>
      <p>{background}</p>
      <Header>Scope</Header>
      <ul>
        {scope.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Container>
  )
}

const Header = styled.h2`
  margin: 0;
  font-size: var(--font-small) !important;
  font-family: var(--ss-font2);
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: var(--base-gap);
  margin-bottom: var(--post-content-margin);

  ${Header}:nth-of-type(1) {
    grid-column: 1;
    grid-row: 1;
  }
  ${Header}:nth-of-type(2) {
    grid-column: 2;
    grid-row: 1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }
`
