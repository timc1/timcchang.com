import React from 'react'
import './layout.css'
import {
  TransitionGroup,
  Transition as ReactTransition,
  // @ts-ignore
} from 'react-transition-group'

import { Location } from '@reach/router'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  React.useEffect(() => {
    document.body.setAttribute('data-url', window.location.pathname)
  }, [window.location.pathname])

  return (
    <Location>
      {({ location }) => (
        <Transition transitionKey={location.pathname} delay={350}>
          {children}
        </Transition>
      )}
    </Location>
  )
}

const getBaseStyles = ({ delay }: { delay: number }) => ({
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `${delay}ms ease-in`,
    opacity: 1,
  },
  exiting: {
    transition: `${delay}ms ease-in`,
    opacity: 0,
  },
})

type TransitionProps = {
  children: React.ReactNode
  transitionKey: string
  delay: number
}

const Transition = React.memo(
  ({ children, transitionKey, delay = 240 }: TransitionProps) => {
    return (
      <TransitionGroup component={null} appear={true}>
        <ReactTransition
          key={transitionKey}
          timeout={{
            enter: delay,
            exit: delay,
          }}
          style={{ position: 'relative' }}
        >
          {(status: string) => (
            <div
              style={{
                ...getBaseStyles({ delay })[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
)
