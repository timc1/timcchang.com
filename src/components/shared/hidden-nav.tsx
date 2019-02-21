import React from 'react'
import { links } from '../shared/info-links'
import styled from '@emotion/styled'

export default function HiddenNav() {
  return (
    <Header>
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.link}>
              <a href={link.link} tabIndex={-1}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  opacity: 0;
  pointer-events: none;
  touch-action: none;
  position: absolute;
  left: 0;
  right: 0;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
