import React from 'react'
import styled from '@emotion/styled'
import { mq, GoBackLink } from '../components/shared/global-styles'
import PageLayout from '../components/shared/page-layout'
import Footer from '../components/shared/footer'
import SEO from '../components/shared/seo'

import useIntersectionObserver from '../components/shared/hooks/useIntersectionObserver'

export default function ProcessIndex() {
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
        title="Process — Tim Chang"
        description="Personal product design and development framework — defining problems, asking questions, and ideating solutions with digital products."
      />
      <PageLayout footerComponent={<Footer />}>
        <Content>
          <Header>
            <GoBackLink to="/">
              <span>Home</span>
            </GoBackLink>
            <h1 className="text">Process</h1>
            <p className="text">
              Building products is an ongoing, iterative process. The way we
              work, think about problems, and create solutions change. Each
              problem will be approached in slightly different ways, but this is
              a simple, high level framework for how I approach thinking about
              and developing any new ideas.
            </p>
          </Header>
          <h2 className="text">Discovery</h2>
          <p className="text">
            The discovery phase allows us to pave a clear direction for a
            project. This is the time where we define, discuss and question a
            problem.
          </p>
          <p className="text">Our goal is to</p>
          <ul className="text">
            <li>Define the problem</li>
            <li>Define who we want to solve the problem for</li>
            <li>Understand bottlenecks that current solutions face</li>
            <li>Articulate why we want to solve this problem</li>
          </ul>
          <h3 className="text">a. Why</h3>
          <p className="text">
            Why do we believe the problem is something worth solving? Is it even
            a problem at all?
          </p>
          <p className="text">
            Asking why allows us to better understand the problem itself,
            allowing us to approach a solution that is formed directly around
            the problem and limiting poor assumptions.
          </p>
          <h3 className="text">b. Who</h3>
          <p className="text">
            Every problem is a problem because it affects something or someone.
            We ask who is affected by our defined problem.
          </p>
          <p className="text">
            Now's a good time to look at public data, competitive products,
            create user profiles to categorize different types of customers, and
            interview current and potential customers. During this phase we
            might even create a quick prototype of an idea and share it with a
            selective group for suggestions and feedback.
          </p>
          <h3 className="text">c. What</h3>
          <p className="text">
            What is the initial solution that we have for our problem? Are there
            already solutions out there for this problem? If so, what
            bottlenecks do these solutions face?
          </p>
          <p className="text">
            It is good to find a few key distinguishing approaches that we will
            take apart from competitive products we defined above.
          </p>
          <h3 className="text">d. How</h3>
          <p className="text">How will we measure our success?</p>
          <p className="text">
            We need a definitive answer for this question — it will prevent us
            from working endlessly at an unreachable goal. This can be defined
            by meeting deadlines, quality expectations, expectations of
            stakeholders, our ability to stay within costs, to the product's
            performance relative to its overall business purpose.
          </p>
          <h2 className="text">Development</h2>
          <p className="text">
            This is the time we take our assumptions, and begin sketching,
            prototyping, and building out the idea through code.
          </p>
          <h3 className="text">a. Information Architecture</h3>
          <p className="text">
            Define and structure the different sections/modules of an idea based
            on our assumption of a user's journey through the application. We
            ask ourselves what questions the user may have during this time, and
            create a structured flow of moving through the application based on
            these questions.
          </p>
          <h3 className="text">b. Sketch & Wireframe</h3>
          <p className="text">
            We begin with low fidelity wireframes and ideas sketched in a
            notepad. Based on the information architecture we created, we use
            this time to design the basic layout and structure of where each
            item will be placed.
          </p>
          <h3 className="text">c. High Fidelity Prototype</h3>
          <p className="text">
            I personally take sketches and go directly to code. Depending on the
            application, it's easy to spin up a React or plain Javascript app
            and get something up and running in minutes. I use Sketch for pretty
            basic shapes and image alterations, but love to code things from
            scratch and have 100% full control of every minute detail. It's also
            really simple to share demos with customers for them to interact and
            use the prototype.
          </p>
          <p className="text">
            We take note of and iterate our final product based on customer
            feedback.
          </p>
          <h2 className="text">Deploy, Distribute, & Iterate</h2>
          <p className="text">
            Once our roadmap has been met, we bundle together the final product,
            and launch.
          </p>
          <h3 className="text">a. Feedback & Analysis</h3>
          <p className="text">
            How are users responding to our product? Based on earlier feedback
            during our development phase, were the feedback that we implemented
            taken well? What are some critical items that we need to improve
            immediately?
          </p>
          <h3 className="text">b. Retrospective & Learnings</h3>
          <p className="text">Did we meet our definition of success?</p>
          <p className="text">
            This is the time to reflect on what happened during our entire
            process. Ask questions like what worked well for us? What didn't
            work so well? What actions and processes would we do differently the
            next time?
          </p>
          <h3 className="text">c. Repeat</h3>
          <p className="text">
            Product development is an ongoing process — we always need to
            reflect, iterate, and update our approach in order to become better
            problem solvers.
          </p>
          <p className="text">
            We'll take things that worked well and apply them to the next
            iteration, and improve upon the things that could've been better.{' '}
          </p>
        </Content>
      </PageLayout>
    </>
  )
}

const Header = styled.div`
  height: 100vh;
  > h1 {
    margin: 100px 0;
    font-weight: var(--light);
  }
  > p {
    margin: var(--base-gap) 0;
  }
`

const Content = styled.section`
  --gap-small: 40px;
  --gap-medium: 80px;
  --gap-large: 120px;
  padding: var(--base-padding);
  perspective: 1000px;
  overflow: hidden;

  ${mq[1]} {
    --gap-small: 20px;
    --gap-medium: 60px;
    --gap-large: 80px;
  }

  h1,
  h2,
  h3,
  p,
  ul {
    max-width: 750px;
    width: 100%;
    line-height: var(--line-height);
  }

  h1 {
    margin: var(--base-padding) 0;
    font-size: var(--font-x-large);
    font-weight: var(--medium);
    font-family: var(--ss-font2);
    color: var(--color-light);
  }

  h2 {
    margin: 0 0 var(--gap-medium) 0;
    font-size: var(--font-large);
    font-weight: var(--regular);
    color: var(--color-light-2);
  }

  h3 {
    margin: var(--gap-medium) 0;
    font-size: var(--font-medium);
    font-weight: var(--regular);
    color: var(--color-light-3);
  }

  p {
    margin: var(--gap-small) 0;
    font-size: var(--font-medium);
    color: var(--color-dark-2);
  }

  ul {
    list-style: circle;
    margin: 0;
    padding: 0 0 0 25px;
    color: var(--color-dark-2);
  }

  li {
    font-size: var(--font-medium);
  }
`
