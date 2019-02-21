import React from 'react'
import styled from '@emotion/styled'

//import useIntersectionObserver from '../components/shared/hooks/useIntersectionObserver'
import { mq } from '../components/shared/global-styles'
//import { css } from '@emotion/core'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //const [isAnimated, setAnimate] = React.useState(false)
  //const header = React.useRef(null)
  const main = React.useRef(null)

  //useIntersectionObserver({
  //  base: null,
  //  refs: [header],
  //  callback: ({ isIntersecting, target }) => {
  //    if (isIntersecting) {
  //      setAnimate(prev => false)
  //    } else {
  //      setAnimate(prev => true)
  //    }
  //  },
  //})

  return (
    <>
      <Header />
      <Main ref={main}>{children}</Main>
      <footer />
    </>
  )
}

const Header = styled.header``

const Main = styled.main`
  --padding: 12%;
  padding: var(--base-gap);

  ${mq[1]} {
    --padding: 25%;
  }
`
