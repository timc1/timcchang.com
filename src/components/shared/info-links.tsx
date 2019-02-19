import React from 'react'
import styled from '@emotion/styled'
import { BasicLink } from '../shared/global-styles'

export default function InfoLinks() {
  return (
    <ListItems>
      <li>
        <BasicLink to="/">Email</BasicLink>
      </li>
      <li>
        <BasicLink to="/">Resume</BasicLink>
      </li>
      <li>
        <BasicLink to="/process/">Process</BasicLink>
      </li>
    </ListItems>
  )
}

const ListItems: any = styled.ul`
  margin: 0 0 0 calc(var(--base-gap) * -1);
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: calc(var(--base-gap) * 2);
  font-size: var(--font-small);

  ${BasicLink} {
    padding: var(--base-gap);
  }
`
