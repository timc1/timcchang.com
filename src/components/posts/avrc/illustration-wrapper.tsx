import React from 'react'
import styled from '@emotion/styled'

export default function IllustrationWrapper({
  illustrations,
}: {
  illustrations: any
}) {
  return (
    <Container>
      <Transition className="illustration">
        {illustrations.map((Illustration: any, index: number) => (
          <Illustration key={index} />
        ))}
      </Transition>
    </Container>
  )
}

const Transition = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: var(--base-gap);
  margin: 80px 0;
  opacity: 0;
  transform: translateY(25px);
  transition: transform 1000ms ease, opacity 400ms 100ms;
`

const Container = styled.div`
  > .illustration.show {
    opacity: 1;
    transform: translateY(0);
  }
`
