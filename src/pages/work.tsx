import React from 'react'
import styled from '@emotion/styled'
// @ts-ignore
import SEO from '../components/shared/seo'
import {
  GoBackLink,
  BasicLink,
  BasicNativeLink,
  mq,
} from '../components/shared/global-styles'
import PageLayout from '../components/shared/page-layout'
import Footer from '../components/shared/footer'

// @ts-ignore
import alexCareyLogo from '../assets/images/alex_carey_face.gif'
// @ts-ignore
import avrcLanding from '../assets/images/avrc_landing.gif'
// @ts-ignore
import tnyLanding from '../assets/images/tny.gif'
// @ts-ignore
import todohq from '../assets/images/todohq.gif'
// @ts-ignore
import austillery from '../assets/images/austillery.jpg'
// @ts-ignore
import ryanblake from '../assets/images/ryan_landing_sd.gif'

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
            Building at the intersection of code and design.
          </p>
        </Content>
        <ProjectsContainer>
          <li
            css={{
              color: 'var(--color-dark-0)',
              background: 'var(--color-light)',
              borderTop: '1px solid var(--color-dark-0)',
            }}
          >
            <Text className="text">
              <h2>alexcarey.co</h2>
              <p>
                A portfolio site I worked on with Alex Carey in building a space
                to showcase a variety of work spanning gifs, illustration,
                video, and print.
              </p>
              <BasicNativeLink
                href="https://alexcarey.co/?ref=tcc"
                target="_blank"
                rel="noopener noreferrer"
                css={{ color: 'var(--blue)' }}
              >
                Visit alexcarey.co
              </BasicNativeLink>
              <p className="tools">React + Gatsby + Netlify</p>
            </Text>
            <ImageContainer>
              <Image src={alexCareyLogo} alt="Alex Carey Face Logo" />
            </ImageContainer>
          </li>
          <li
            css={{
              color: 'var(--color-light)',
              background: 'var(--blue)',
            }}
          >
            <Text className="text">
              <h2>avresources.co</h2>
              <p>
                I worked with AV Resources (AVRC) to build a ground up site to
                showcase their healthcare products and consultancy services. The
                site is a server side rendered React application powered by a
                custom CMS.
              </p>
              <BasicNativeLink
                href="https://avresources.co/?ref=tcc"
                target="_blank"
                rel="noopener noreferrer"
                css={{ color: '#8feffb' }}
              >
                Visit avresources.co
              </BasicNativeLink>
              <p className="tools">React + Node/Express + EC2 + RDS</p>
            </Text>
            <ImageContainer>
              <Image src={avrcLanding} alt="AVRC Landing Page" />
            </ImageContainer>
          </li>
          <li
            css={{
              color: 'var(--color-dark-0)',
              background: 'var(--color-light)',
            }}
          >
            <Text className="text">
              <h2>thisnextyear.com</h2>
              <p>
                A holiday project to write a letter to your future self.
                Featured and ranked #2 on ProductHunt and over 50k visitors.
              </p>
              <BasicNativeLink
                href="https://thisnextyear.com/?ref=tcc"
                target="_blank"
                rel="noopener noreferrer"
                css={{ color: 'var(--blue)' }}
              >
                Visit thisnextyear.com
              </BasicNativeLink>
              <p className="tools">React + Serverless</p>
            </Text>
            <ImageContainer>
              <Image src={tnyLanding} alt="This Next Year Gif" />
            </ImageContainer>
          </li>
          <li
            css={{
              color: 'var(--color-light)',
              background: '#000',
            }}
          >
            <Text className="text">
              <h2>todohq.co</h2>
              <p>
                A minimal and accessible todo list playing with the alpha build
                of React Hooks. All data saved locally in the browser - sign up
                to access the list anywhere. Featured on ProductHunt November
                2018.
              </p>
              <BasicNativeLink
                href="https://todohq.co/?ref=tcc"
                target="_blank"
                rel="noopener noreferrer"
                css={{ color: 'var(--blue)' }}
              >
                Visit todohq.co
              </BasicNativeLink>
              <p className="tools">React + Serverless</p>
            </Text>
            <ImageContainer>
              <Image src={todohq} alt="TodoHQ app" />
            </ImageContainer>
          </li>
          <li
            css={{
              color: 'var(--color-dark-0)',
              background: 'var(--color-light)',
            }}
          >
            <Text className="text">
              <h2>austillery.com</h2>
              <p>
                Austillery is a marketplace for unique and rising events.
                Visitors can create an account and using the modular editor can
                easily build their event. Featured on Product Hunt July 2018.
              </p>
              <BasicNativeLink
                href="https://austillery.com/?ref=tcc"
                target="_blank"
                rel="noopener noreferrer"
                css={{ color: 'var(--blue)' }}
              >
                Visit austillery.com
              </BasicNativeLink>
              <p className="tools">React + Node.js/Express + EC2 + MySQL</p>
            </Text>
            <ImageContainer>
              <Image src={austillery} alt="Austillery app" />
            </ImageContainer>
          </li>
          <li
            css={{
              color: 'var(--color-dark-1)',
              background: 'var(--color-light)',
              borderTop: '2px solid #f1f1f1',
            }}
          >
            <Text className="text">
              <h2>Ryan Blake @ Avrek Law</h2>
              <p>
                A single page, animated marketing site for Attorney Ryan Blake
                of Avrek Law Firm. (Site currently in review)
              </p>
              <BasicNativeLink
                href="https://upbeat-hawking-e597f9.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                css={{ color: 'var(--blue)' }}
              >
                Visit site
              </BasicNativeLink>
              <p className="tools">Javascript + HTML + CSS + Parcel</p>
            </Text>
            <ImageContainer>
              <Image src={ryanblake} alt="Ryan Blake Avrek Law Firm" />
            </ImageContainer>
          </li>
          <li
            css={{
              color: 'var(--color-dark-0)',
              background: '#fbfbfb',
            }}
          >
            <Text className="text">
              <h2 css={{ opacity: 0.5 }}>Fiesta (coming soon)</h2>
              <p css={{ opacity: 0.5 }}>
                Building simple, sharable event pages through an easy to use,
                UI/UX centered dashboard. Fiesta is the project behind the
                current blog.
              </p>
              <BasicLink
                to="/blog/"
                css={{
                  color: 'var(--blue)',
                }}
              >
                Visit blog
              </BasicLink>

              <p className="tools" css={{ opacity: 0.5 }}>
                Next.js
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
  background: var(--color-black);

  h1 {
    margin: 100px 0;
    font-family: var(--ss-font2);
    font-size: var(--font-x-large);
    font-weight: var(--light);
    color: var(--color-light);
  }

  p {
    font-size: var(--font-medium);
    color: var(--color-dark-2);
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
    grid-gap: calc(var(--base-gap) * 3);
    overflow: hidden;

    h2,
    p {
      grid-column: 1;
    }

    h2 {
      font-size: var(--font-small);
      font-weight: var(--medium);
      font-family: var(--ss-font2);
      margin: 0;
    }
    p {
      font-size: var(--font-medium);
      margin: 0;
    }
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

  ${mq[1]} {
    > li {
      padding: calc(var(--base-padding) * 3) var(--base-padding);
    }
  }
`

const Text = styled.div`
  display: grid;
  grid-gap: var(--base-gap);
  padding: 0 var(--base-padding);
  max-width: 700px;
  margin: auto;
  z-index: 1;

  .tools {
    font-size: var(--font-x-small);
    color: inherit;
  }
`

const ImageContainer = styled.div`
  position: relative;
  padding-top: 75%;

  ${mq[2]} {
    padding-top: 35%;
  }
`

//const Mask = styled.div`
//  position: absolute;
//  top: 0;
//  right: 0;
//  bottom: 0;
//  left: 60%;
//  background: var(--color-light);
//  mask: url(${(props: { src: string }) => props.src}) no-repeat round;
//`

const Image = styled.img<{ src: string; alt: string }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 0;
`
