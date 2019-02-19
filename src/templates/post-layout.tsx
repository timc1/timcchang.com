import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import useIntersectionObserver from '../components/shared/hooks/useIntersectionObserver'
import { mq } from '../components/shared/global-styles'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAnimated, setAnimate] = React.useState(false)
  const header = React.useRef(null)
  const main = React.useRef(null)

  useIntersectionObserver({
    base: null,
    targets: [header],
    callback: ({ isIntersecting, target }) => {
      if (isIntersecting) {
        setAnimate(prev => false)
      } else {
        setAnimate(prev => true)
      }
    },
  })

  return (
    <>
      <Header ref={header} isAnimated={isAnimated}>
        <Nav>
          <ul>
            <li>
              <Logo to="/">
                <span>t</span>
                <span>i</span>
                <span>m</span>
                <span>.</span>
                <span>c</span>
              </Logo>
            </li>
          </ul>
        </Nav>
      </Header>
      <Main ref={main}>{children}</Main>
      <footer />
    </>
  )
}

const Nav = styled.nav`
  height: 50px;
  background: var(--color-light);
  z-index: 3;

  > ul {
    max-width: 2000px;
    list-style: none;
    margin: 0 auto;
    padding: var(--base-gap);
    height: 100%;
    display: flex;
    align-items: center;

    > li:first-of-type {
    }
  }
`

const Logo: any = styled(Link)`
  margin: 0;
  font-size: 25px;
  font-weight: var(--bold);
  text-decoration: none;
  color: var(--color-dark);
  position: fixed;
  top: 20px;
  outline: none;
  z-index: 3;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Header = styled.header`
  padding: var(--base-gap);

  ${Logo} {
    transform: ${props =>
      props.isAnimated ? 'translateX(0)' : 'translateX(-10px)'};
    transition: 200ms ease;
    &::before {
      top: -10px;
      left: -10px;
      right: 20px;
      bottom: -10px;
      background: var(--color-light);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      border-radius: var(--base-radius);
      transform: ${(props: { isAnimated: boolean }) =>
        props.isAnimated ? 'rotate(90deg)' : 'rotate(0deg)'};
      opacity: ${(props: { isAnimated: boolean }) =>
        props.isAnimated ? '1' : '0'};
      transition: 200ms ease;
      transition-property: opacity, transform;
      z-index: -1;
    }

    > span {
      display: inline-block;
      &:first-of-type {
        transform: ${(props: { isAnimated: boolean }) =>
          props.isAnimated ? 'translateX(10px)' : 'translateX(0)'};
        transition: 200ms var(--cubic);
      }

      &:not(:first-of-type) {
        opacity: ${(props: { isAnimated: boolean }) =>
          props.isAnimated ? '0' : '1'};
        transform: ${(props: { isAnimated: boolean }) =>
          props.isAnimated ? 'translateX(-10px)' : 'translateX(0)'};
        transition: 200ms var(--cubic);
      }
    }
  }
`

const Main = styled.main`
  --padding: 12%;
  padding: var(--base-gap);

  ${mq[1]} {
    --padding: 20%;
  }
`
