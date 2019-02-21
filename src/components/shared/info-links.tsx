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
    link: '/case-studies/',
    text: 'Case Studies',
  },
  {
    link: '/blog/',
    text: 'Blog',
  },
  {
    link: '/process/',
    text: 'Process',
  },
  {
    link: '/resume/',
    text: 'Resume',
  },
  {
    link: '/archive/',
    text: 'Archive',
  },
  {
    type: 'native',
    link: 'mailto:timchang.tcc@gmail.com?subject=hi!',
    text: 'Email',
  },
]

const ListItems: any = styled.ul`
  margin: 0 0 0 calc(var(--base-gap) * -1);
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: calc(var(--base-gap) * 2);
  font-size: var(--font-small);
  font-weight: var(--medium);

  ${BasicLink}, ${BasicNativeLink} {
    padding: var(--base-gap);
  }
`
