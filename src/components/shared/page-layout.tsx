import React from 'react'
import HiddenNav from './hidden-nav'

export default function LayoutWithNavLinks({
  footerComponent,
  children,
}: {
  footerComponent: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <HiddenNav />
      <main>{children}</main>
      {footerComponent}
    </>
  )
}
