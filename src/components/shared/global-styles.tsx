// @ts-ignore
import caret from '../../assets/images/caret-left.svg'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const breakpoints = [568, 767, 1023]
export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
export const rmq = breakpoints.map(bp => `@media (min-width: ${bp + 1}px)`)

export const HighlightedLink = styled(Link)`
  position: relative;
  color: var(--color-dark-0);
  text-decoration: none;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: var(--yellow);
    z-index: -1;
  }
`

export const BasicLink: any = styled(Link)`
  position: relative;
  color: ${(props: any) =>
    props.active === 'true' ? 'var(--color-dark-0)' : 'var(--color-dark-1)'};
  font-weight: var(--regular);
  text-decoration: none;
  width: max-content;
`

export const BasicNativeLink: any = styled.a`
  position: relative;
  color: ${(props: any) =>
    props.active === 'true' ? 'var(--color-dark-2)' : 'var(--color-dark-1)'};
  font-weight: var(--regular);
  text-decoration: none;
`

export const GoBackLink = styled(Link)`
  position: relative;
  color: ${props =>
    props.color === 'dark' ? 'var(--color-black)' : 'var(--color-light)'};
  text-decoration: none;
  display: inline-block;
  padding: var(--base-gap);
  padding-left: calc(var(--base-gap) * 2);
  font-size: var(--font-small);
  font-weight: var(--medium);
  width: max-content;
  > span {
    &::before {
      content: '';
      position: absolute;
      height: var(--font-medium);
      width: 15px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: ${props =>
        props.color === 'dark' ? 'var(--color-black)' : 'var(--color-light)'};
      mask: url(${caret}) center no-repeat / contain;
    }
  }
`
