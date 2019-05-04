import React from 'react'
import styled from '@emotion/styled'
// @ts-ignore
import SEO from '../components/shared/seo'
import { GoBackLink, mq } from '../components/shared/global-styles'
import PageLayout from '../components/shared/page-layout'
import Footer from '../components/shared/footer'

// @ts-ignore
import alexCareyLogo from '../assets/images/alex_carey_face.jpg'

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
        title="Work & Projects — Tim Chang"
        description="A collection of past projects and work"
      />
      <PageLayout footerComponent={<Footer />}>
        <Content>
          <GoBackLink to="/" color="dark">
            <span>Home</span>
          </GoBackLink>
          <h1 className="text">Work & Projects</h1>
          <p className="text">
            A home for past projects — for fun and experimental.
          </p>
        </Content>
        <ProjectsContainer>
          <li>
            <Text className="text">
              <h2>alexcarey.co</h2>
              <p>
                A portfolio site I worked on with Alex Carey in building a space
                to showcase a variety of work spanning gifs, illustration,
                video, and print.
              </p>
            </Text>
            <ImageContainer>
              <Image src={alexCareyLogo} alt="Alex Carey Face Logo" />
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
    overflow: hidden;

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
    background: #06dcfc;
    color: var(--color-dark-0);
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
  z-index: 1;
`

const ImageContainer = styled.div``

//const Mask = styled.div`
//  position: absolute;
//  top: 0;
//  right: 0;
//  bottom: 0;
//  left: 60%;
//  background: var(--color-light);
//  mask: url(${(props: { src: string }) => props.src}) no-repeat round;
//`

const Image = styled.div<{ src: string; alt: string }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: url(${props => props.src}) no-repeat round;
  transform: scale(2) translateX(50%);
  z-index: 0;

  ${mq[2]} {
    position: absolute;
    left: 60%;
  }
`
