import React from 'react'
import { Button } from './ui/button'

export const Navbar = () => {
  return (
    <section className='flex w-full justify-between items-center h-16 border-b px-10'>
        <h1 className='text-xl font-bold'>DOC<span className='text-indigo-600'>LINK</span></h1>
        <Button className='bg-indigo-600'>Join The Waitlist</Button>
    </section>
  )
}
