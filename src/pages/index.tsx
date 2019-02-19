import React from 'react'
import styled from '@emotion/styled'
import { HighlightedLink } from '../components/shared/global-styles'
import PostsIndex from '../components/posts/index'
import InfoLinks from '../components/shared/info-links'
import { mq } from '../components/shared/global-styles'

export default function Index() {
  return (
    <>
      <Container>
        <Header>
          Hello, I am <HighlightedLink to="/">Tim Chang</HighlightedLink>, a
          product designer and developer. Currently I am based in Los Angeles,
          CA working on selective client and independent projects.
        </Header>
        <Header>
          I design and build digital{' '}
          <HighlightedLink to="/">products</HighlightedLink> that are
          accessible, performant, and focus on fine, minute detail.
        </Header>
        <Header>
          Over the past few years I have{' '}
          <HighlightedLink to="/">work</HighlightedLink>ed with startups to
          ideate products, define goals, and solve business problems.
        </Header>
        <Header>
          I enjoy sharing and{' '}
          <HighlightedLink to="/">documenting</HighlightedLink> the process of
          my work.
        </Header>
        <InfoLinksContainer>
          <InfoLinks />
        </InfoLinksContainer>
      </Container>
      <PostsSection>
        <PostsIndex dark />
      </PostsSection>
    </>
  )
}

const Header = styled.p`
  margin: 0;
  font-size: var(--font-medium);
  line-height: calc(var(--font-medium) + 1rem);
  font-weight: var(--medium);
  color: var(--color-dark-0);
`

const InfoLinksContainer = styled.div`
  margin-top: 80px;
`

const Container = styled.section`
  min-height: 100vh;
  padding: 5%;

  ${Header}, ${InfoLinksContainer} {
    max-width: 650px;
  }

  // prettier-ignore
  ${Header}:not(:last-of-type) {
    margin-bottom: 10px;
  }

  ${mq[1]} {
    padding: 10% 5%;
  }
`

const PostsSection = styled.section`
  padding: 5% 5% 100px 5%;
  background: var(--color-black);
  > ul {
    max-width: 700px;
  }
  ${mq[1]} {
    padding: 10%;
  }
`
