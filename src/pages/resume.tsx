import React from 'react'
import styled from '@emotion/styled'
import {
  GoBackLink,
  BasicNativeLink,
  mq,
} from '../components/shared/global-styles'
import PageLayout from '../components/shared/page-layout'
import Footer from '../components/shared/footer'
import SEO from '../components/shared/seo'

import useIntersectionObserver from '../components/shared/hooks/useIntersectionObserver'

const ResumeIndex = () => {
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
        title="Resume — Tim Chang"
        description="Past and current work within digital products over the past few years."
      />
      <PageLayout footerComponent={<Footer />}>
        <Content>
          <GoBackLink to="/" color="dark">
            <span>Home</span>
          </GoBackLink>
          <Title className="text">Resume</Title>
          <PlainText className="text">
            My name is Tim Chang. Over the past few years I have been on a
            continuous journey to figure out where I stand in my professional
            career. I question myself a lot.
          </PlainText>
          <PlainText className="text">
            In the last 2 years I have learned what I know about software
            development solely through resources online. Through this, I have
            found a huge interest in building user interfaces.{' '}
          </PlainText>
          <PlainText className="text">
            I believe in the fine, minute details in design and development —
            apart from its aesthetic appeal, I believe the care and thought that
            happens within a creator's mind is clearly reflected through the end
            product. 
          </PlainText>
          <PlainText className="text">
            I currently live and work in Los Angeles.
          </PlainText>

          <SectionTitle className="text">Work Experience</SectionTitle>
          <Section className="text">
            <Date>Today</Date>
            <Role>
              <RoleTitle>Independent Product Developer</RoleTitle>
              <p>
                In mid 2017 I made a decision to put full attention toward
                learning software development, particularly in developing user
                interfaces. It is something that's always been of interest, but
                with many things creative, we always have an internal question
                of whether or not we are even capable. I bit the bullet, moved
                down to LA, and started learning and making things. Today I have
                learned that this is an ever learning process that never stops.
                We have to get through build shitty things in order to get
                better.
              </p>
              <p>
                I've ventured into contracted client work in order to... live.
                Recently:
              </p>
              <ul className="text">
                <li>
                  <h4>Avrek Law Firm Attorney Micro Site</h4>
                  <p>
                    I developed an interactive micro landing page for Ryan Blake
                    at Avrek Law to showcase individual attorney services.
                    Because of its single page layout, I opted to build the
                    entire UI from scratch.
                  </p>
                </li>
                <li>
                  <h4>AV Resources Corporation</h4>
                  <p>
                    A ground up redesign of AVRC's company website. This is a
                    completely in-house built Node.js & React application with a
                    custom CMS and internal applications for building government
                    forms.
                  </p>
                </li>
              </ul>
              <p>Some recent side projects:</p>
              <ul className="text">
                <li>
                  <h4>This Next Year (thisnextyear.com)</h4>
                  <p>
                    I teamed up with{' '}
                    <a
                      href="https://instagram.com/alexcarey.s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @alexcarey.s
                    </a>{' '}
                    in building a holiday project, which ended up receiving #2
                    product on Product Hunt and 47k visitors.
                  </p>
                </li>
                <li>
                  <h4>TodoHQ (todohq.co)</h4>
                  <p>
                    A simple todo list that saves everything locally in the
                    browser or through authentication. This was really just a
                    project to play with layout and new React features. Featured
                    on Product Hunt!
                  </p>
                </li>
                <li>
                  <h4>Austillery (austillery.com)</h4>
                  <p>
                    A events marketplace to list and find local events. My first
                    play at building a full stack database driven application.
                    But more notably, the domain and every social handle wasn't
                    taken! This was my first feature on Product Hunt and I was
                    overly excited.
                  </p>
                </li>
              </ul>
            </Role>
          </Section>
          <Section className="text">
            <Date>2016 — 2017</Date>
            <Role>
              <RoleTitle>Business Development & Product, Verlocal</RoleTitle>
              <p>
                I joined Verlocal after coming back from my year long venture in
                Asia. My role at Verlocal, like any startup, was a juggle
                between developing our Pro product pipeline, maintaining Pro
                client relations, and acquiring more Pro users. Pro is an online
                booking & events management software. We built Pro as a pivot
                from a B2C marketplace website towards a B2B SaaS company.
              </p>
              <p>Some milestones:</p>
              <ul className="text">
                <li>
                  <h4>Acquiring 25% of the company's overall revenue</h4>
                  <p>
                    This sounds nice — though it was the collective effort of
                    the entire team to build Pro, a good enough product that I
                    was even able to find customers for.
                  </p>
                </li>
                <li>
                  <h4>Living at the office</h4>
                  <p>
                    Realizing work-life balance is a real thing. I am never
                    doing this again.
                  </p>
                </li>
                <li>
                  <h4>Learning that people is everything</h4>
                  <p>
                    A product is only as good as the people that build it. I
                    worked with some great people during my time here and
                    realized the importance of healthy relationships within the
                    workplace.
                  </p>
                </li>
              </ul>
            </Role>
          </Section>
          <Section className="text">
            <Date>2016</Date>
            <Role>
              <RoleTitle>Junior Developer and Content Guy, Omnyfy</RoleTitle>
              <p>
                I spent a year working and living in Shanghai, China. This was
                such a fun part of my life. I learned how to work and adapt in a
                whole different cultural environment. During this time I played
                a small role in the development and content management of
                Vicinity Centre's shopping centers in Australia as well as a
                site for Shanghai Multimedia Association. I was very fortunate
                to have been given the opportunity to learn here.
              </p>
            </Role>
          </Section>
          <Section className="text">
            <Date>2015 — 2016</Date>
            <Role>
              <RoleTitle>Product Operations Associate, Handpick</RoleTitle>
              <p>
                This was another job I am extremely grateful to have had. I was
                1/3 of the pilot product operations team. With no past
                experience within the field, we partnered with Safeway, FoodsCo,
                GSO, and OnTrac to develop a logistics food delivery system
                paired with the Handpick iOS app. We successfully delivered over
                2500 meal kits within 2 months of launching. Mornings were spent
                in the office planning and strategizing long term plans while
                afternoons were spent with the team in the basement of Safeway
                at Market St., packing and listening to music.
              </p>
              <p>
                Most importantly I developed long term, great friendships with
                the people here.
              </p>
            </Role>
          </Section>

          <SectionTitle className="text">Skills</SectionTitle>
          <Skills className="text">
            <li className="primary">Javascript</li>
            <li className="primary">React JS</li>
            <li className="primary">HTML</li>
            <li className="primary">CSS/SCSS</li>
            <li className="primary">Typescript</li>
            <li className="primary">Product</li>
            <li className="primary">Copywriting</li>
            <li className="primary">Strategy & Planning</li>
            <li className="primary">Creative Direction</li>
            <li className="secondary">Webpack</li>
            <li className="secondary">AWS</li>
            <li className="secondary">Git</li>
            <li className="secondary">Sketch</li>
          </Skills>

          <SectionTitle className="text">
            But these are just words.
          </SectionTitle>
          <PlainText className="text" css={{ marginBottom: '100px' }}>
            I enjoy working on problems with others. If you think our
            backgrounds, personalities, or skills may work well together, let's{' '}
            <BasicNativeLink href="mailto:timchang.tcc@gmail.com?subject=hi!">
              chat
            </BasicNativeLink>
            !
          </PlainText>
        </Content>
      </PageLayout>
    </>
  )
}

export default ResumeIndex

const PlainText = styled.p`
  margin: calc(var(--base-gap) * 2) 0;
  max-width: calc(750px - (var(--base-gap) + 60px));
  width: 100%;
`

const Content = styled.div`
  padding: var(--base-padding);
  color: var(--color-black);
  font-size: var(--font-medium);
  line-height: var(--line-height);
`

const Title = styled.h1`
  margin: 100px 0 100px -0.25rem;
  font-size: var(--font-x-large);
  font-family: var(--ss-font2);
  font-weight: var(--light);

  ${mq[1]} {
    margin: 100px 0;
  }
`

const SectionTitle = styled.h2`
  margin: 100px 0 60px 0;
  font-family: var(--ss-font2);
`

const Section = styled.section`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: var(--base-gap);
  align-items: start;
  margin-bottom: 100px;
  margin-left: calc((40px + var(--base-gap)) * -1);
  max-width: 750px;
  width: 100%;

  h1 {
    margin: var(--base-padding) 0;
    font-size: var(--font-large);
    font-family: var(--ss-font2);
    font-weight: var(--light);
  }

  h2,
  h3,
  h4 {
    margin: calc(var(--base-gap) * 2) 0;
  }

  ul,
  p {
    margin: calc(var(--base-gap) * 1.5) 0;
  }

  ${mq[1]} {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
`

const Date = styled.h2`
  margin: 0.6rem 0 !important;
  justify-self: end;
  font-size: var(--font-x-small);
  font-weight: var(--medium);
  font-family: var(--ss-font2);
  color: var(--color-dark-2);
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  ${mq[1]} {
    writing-mode: unset;
    transform: none;
    justify-self: start;
  }
`

const Role = styled.div``

const RoleTitle = styled.h3`
  margin: 0 !important;
  font-weight: var(--medium);
  color: var(--color-black);
`

const Skills = styled.ul`
  margin: 60px 0;
  > li {
    margin: var(--base-gap) 0;
  }
  > li.primary {
    color: var(--color-black);
  }

  > li.secondary {
    color: var(--color-dark-2);
  }
`
