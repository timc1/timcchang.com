import React from 'react'
import styled from '@emotion/styled'
// @ts-ignore
import SEO from '../components/shared/seo'
import { GoBackLink, mq } from '../components/shared/global-styles'
import PageLayout from '../components/shared/page-layout'
import Footer from '../components/shared/footer'

// @ts-ignore
import pilotsLogo from '../assets/images/88.svg'

import useIntersectionObserver from '../components/shared/hooks/useIntersectionObserver'

export default function BlogIndex() {
  useIntersectionObserver({
    base: null,
    targetName: '.text',
    callback: ({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.add('show')
      }
    },
    autoDisconnect: true,
  })

  return (
    <>
      <SEO
        title="Archive — Tim Chang"
        description="A graveyard of past projects eek!"
      />
      <PageLayout footerComponent={<Footer />}>
        <Content>
          <GoBackLink to="/" color="dark">
            <span>Back</span>
          </GoBackLink>
          <h1 className="text">Archive</h1>
          <p className="text">
            A home for past projects, for fun and experimental.
          </p>
        </Content>
        <ProjectsContainer>
          <li>
            <Text className="text">
              <h2>88pilots</h2>
              <p>
                A project I worked on with Minh Reigen in building a space for
                locals to meet new and interesting people. We built a simple
                browser chat and notification system, which ultimately we ended
                up using personally to chat.
              </p>
            </Text>
            <ImageContainer>
              <Mask src={pilotsLogo} />
            </ImageContainer>
          </li>
          <li>
            <Text className="text">
              <h2>Hungrytime</h2>
              <p>
                Llama, Inc. provided a set of APIs for discovering local
                restaurants and niche foods. I worked with Llama in creating a
                responsive UI for their social food discovery site.
              </p>
            </Text>
          </li>
        </ProjectsContainer>
      </PageLayout>
    </>
  )
}

const Content = styled.div`
  padding: var(--base-padding);
  min-height: 100vh;
  background: var(--yellow);
  line-height: var(--line-height);

  h1 {
    margin: 100px 0;
    font-family: var(--ss-font2);
    font-size: var(--font-x-large);
    font-weight: var(--light);
    color: var(--color-dark-0);
  }

  p {
    font-size: var(--font-medium);
    color: var(--color-dark-1);
  }
`

const ProjectsContainer = styled.ul`
  line-height: var(--line-height);
  overflow: hidden;
  > li {
    position: relative;
    padding: var(--base-padding);
    margin-left: calc(var(--base-padding) * -1);
    margin-right: calc(var(--base-padding) * -1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--color-dark-0);

    h2,
    p {
      grid-column: 1;
    }

    h2 {
      font-size: var(--font-small);
      font-weight: var(--medium);
      font-family: var(--ss-font2);
      margin: 0 0 var(--base-gap) 0;
    }
    p {
      font-size: var(--font-medium);
      margin: 0;
    }
  }

  > li:first-of-type {
    background: var(--blue);
    color: var(--color-light);
  }

  > li:nth-of-type(2) {
    background: var(--color-light);
  }

  ${mq[2]} {
    > li {
      grid-template-columns: 1fr;

      h2,
      p {
        grid-column: unset;
      }
    }
  }
`

const Text = styled.div`
  padding: var(--base-padding);
  max-width: 700px;
  margin: auto;
`

const ImageContainer = styled.div``

const Mask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 60%;
  background: var(--color-light);
  mask: url(${(props: { src: string }) => props.src}) no-repeat round;
`
