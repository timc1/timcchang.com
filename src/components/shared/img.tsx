import React from 'react'
import styled from '@emotion/styled'

type ImageProps = {
  src: string
  alt: string
}

export default function Image({ src, alt }: ImageProps) {
  return <Img src={src} alt={alt} />
}

const Img = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 3px;
`
