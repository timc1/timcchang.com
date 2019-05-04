import React from 'react'
import styled from '@emotion/styled'
import { BasicLink, BasicNativeLink } from '../shared/global-styles'
import { Location } from '@reach/router'

export default function InfoLinks() {
  return (
    <Location>
      {({ location }) => (
        <ListItems>
          {links.map(link => (
            <li key={link.link}>
              {link.type === 'native' ? (
                <BasicNativeLink
                  href={link.link}
                  active={link.link === location.pathname ? 'true' : 'false'}
                >
                  {link.text}
                </BasicNativeLink>
              ) : (
                <BasicLink
                  to={link.link}
                  active={link.link === location.pathname ? 'true' : 'false'}
                >
                  {link.text}
                </BasicLink>
              )}
            </li>
          ))}
        </ListItems>
      )}
    </Location>
  )
}

export const links = [
  {
    link: '/blog/',
    text: 'Blog',
  },
  {
    link: '/archive/',
    text: 'Work & Projects',
  },
  {
    link: '/case-studies/',
    text: 'Case Studies',
  },
  {
    link: '/resume/',
    text: 'Resume',
  },
  {
    type: 'native',
    link: 'mailto:timchang.tcc@gmail.com?subject=hi!',
    text: 'Email',
  },
  {
    type: 'native',
    link: 'https://twitter.com/timcchang',
    text: 'Twitter',
  },
]

const ListItems: any = styled.ul`
  margin: 0 0 0 calc(var(--base-gap) * -1);
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: 25%;
  font-size: var(--font-small);
  font-weight: var(--medium);

  ${BasicLink}, ${BasicNativeLink} {
    padding: var(--base-gap);
  }
`
