import React from 'react'
import styled from '@emotion/styled'
import InfoLinks from './info-links'
import { mq } from '../../components/shared/global-styles'

export default function Footer({ offset }: { offset?: any }) {
  return (
    <FooterStyle offset={offset ? 'true' : 'false'}>
      <InfoLinks />
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-gap: var(--base-gap);
  padding: var(--base-padding);
  ul {
    grid-column: ${(props: { offset: 'true' | 'false' }) =>
      props.offset === 'true' ? 2 : 1};
  }

  ${mq[2]} {
    grid-template-columns: 1fr;

    ul {
      grid-column: 1;
    }
  }
`
