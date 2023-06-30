import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='flex justify-between w-full p-4'>
        <h1 className='text-4xl'>LOGO</h1>

        <ul className='flex items-center justify-between font-bold underline w-96'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}