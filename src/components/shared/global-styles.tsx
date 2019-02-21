import styled from '@emotion/styled'
import { Link } from 'gatsby'

const breakpoints = [568, 767, 1023]
export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
export const rmq = breakpoints.map(bp => `@media (min-width: ${bp + 1}px)`)
// @ts-ignore
import caret from '../../assets/images/caret-left.svg'

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

export const BasicLink = styled(Link)`
  position: relative;
  color: var(--color-dark-0);
  text-decoration: none;
`

export const GoBackLink = styled(Link)`
  position: relative;
  color: var(--color-light);
  text-decoration: none;
  display: inline-block;
  padding: var(--base-gap);
  padding-left: calc(var(--base-gap) * 2);
  font-size: var(--font-small);
  > span {
    &::before {
      content: '';
      position: absolute;
      height: var(--font-small);
      width: 15px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: var(--color-light);
      mask: url(${caret}) center no-repeat / contain;
    }
  }
`
