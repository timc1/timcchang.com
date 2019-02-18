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

export const BasicLink = styled(Link)`
  position: relative;
  color: var(--color-dark-0);
  text-decoration: none;
`
