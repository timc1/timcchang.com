import React from 'react'
import styled from '@emotion/styled'

export default function IllustrationWrapper({
  illustrations,
}: {
  illustrations: any
}) {
  return (
    <Container>
      {illustrations.map((Illustration, index) => (
        <Illustration key={index} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: var(--base-gap);
  margin: 80px 0;
`
