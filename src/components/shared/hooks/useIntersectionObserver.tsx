import 'intersection-observer'
import React from 'react'

type IntersectionObserverProps = {
  base: React.RefObject<any> | null
  targets: React.RefObject<any>[]
  callback: ({
    isIntersecting,
    target,
  }: {
    isIntersecting: boolean
    target: any
  }) => void
}

export default function useIntersectionObserver({
  base = null,
  targets,
  callback,
}: IntersectionObserverProps) {
  const observer = React.useRef<any>(null)
  const options = {
    root: base ? base.current : null,
  }
  // Setup intersection observer on mount
  React.useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        callback({
          isIntersecting: entry.isIntersecting,
          target: entry.target,
        })
      })
    }, options)

    targets.forEach(target => observer.current.observe(target.current))

    return () => observer.current.disconnect()
  }, [])
}
