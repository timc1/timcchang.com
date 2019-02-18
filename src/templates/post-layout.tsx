import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import styled from '@emotion/styled'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Content>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Content>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`

const Content = styled.div`
  position: relative;
  max-width: 750px;
  margin: auto;
  padding: 100px var(--base-gap);
`
