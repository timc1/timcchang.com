import 'intersection-observer'
import React from 'react'

type IntersectionObserverProps = {
  base: React.RefObject<any> | null
  refs?: React.RefObject<any>[]
  targetName?: string
  callback: ({
    isIntersecting,
    target,
  }: {
    isIntersecting: boolean
    target: any
    observer: any
  }) => void
}

export default function useIntersectionObserver({
  base = null,
  refs = [],
  targetName = '',
  callback,
}: IntersectionObserverProps) {
  const observer = React.useRef<any>(null)
  const options = {
    root: base ? base.current : null,
  }
  // Setup intersection observer on mount
  React.useEffect(() => {
    let count: number = 0
    let elements: any = []

    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Disconnect observer when all elements have been intersected.
          count++
          if (count === elements.length) {
            observer.current.disconnect()
          }
        }
        callback({
          isIntersecting: entry.isIntersecting,
          target: entry.target,
          observer: observer.current,
        })
      })
    }, options)

    if (refs.length > 0) refs.forEach(target => elements.push(target.current))
    if (targetName.length > 0) {
      const domElements = Array.from(document.querySelectorAll(`${targetName}`))
      domElements.forEach(el => elements.push(el))
    }

    elements.forEach((element: HTMLElement) =>
      observer.current.observe(element)
    )

    if (!elements.length) observer.current.disconnect()

    // Cleanup
    return () => {
      console.log('unmount', elements)
      observer.current.disconnect()
    }
  }, [])
}
