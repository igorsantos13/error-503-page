import React from 'react'
import Image from 'next/image'
import hero from './503 Error Service Unavailable-amico.svg'

type Props = {}

export default function Hero({}: Props) {
  return (
    <Image src={hero} alt='hero'></Image>
  )
}