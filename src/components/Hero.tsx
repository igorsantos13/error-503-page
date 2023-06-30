import React from 'react'
import Image from 'next/image'
import hero from './503 Error Service Unavailable-bro.svg'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <Image src={hero} alt='hero' className='bounce-animation'></Image>
      <h3 className='font-bold text-purple-700'>oops, i think we unplugged the wrong cable here...</h3>
      <p className='text-white'>No worries! We're trying our best to fix it asap!</p>
    </div>
  )
}