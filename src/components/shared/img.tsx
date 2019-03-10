import React from 'react'
import styled from '@emotion/styled'

type ImageProps = {
  src: string
  alt: string
  shadow?: boolean
}

export default function Image({ src, alt, shadow = false }: ImageProps) {
  return <Img src={src} alt={alt} shadow={shadow} />
}

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: ${(props: { shadow?: boolean }) =>
    props.shadow ? 'var(--base-box-shadow)' : 'none'};
  margin-bottom: 1em;
`
