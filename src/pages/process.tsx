import React from 'react'
import styled from '@emotion/styled'

const Component = () => {
  return (
    <>
      <Content>
        <Header>Process</Header>
      </Content>
    </>
  )
}

export default Component

const Content = styled.section`
  padding: 5%;
`

const Header = styled.h1`
  margin: 0;
  font-size: var(--font-x-large);
  font-weight: var(--medium);
  font-family: var(--ss-font2);
`
