import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Section1 = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-black font-bold text-5xl'>DockLink: Revolutionizing </h1>
        <h1 className='text-blue-600 font-bold text-5xl'>Professional and Employers</h1>
        <p className='max-w-screen-lg mt-2 text-center'>At DocLink, we believe in revolutionizing the way healthcare is accessed and delivered. Our comprehensive platform caters to the needs of medical professionals and employers, providing a seamless and innovative solution for all stakeholders in the healthcare industry.</p>
        <Button className='mt-12 px-10'>Get Started</Button>

        <div className='mt-5'>
          <Image src="section1.svg" width={1000} height={100} alt='section1' priority={true}></Image>
        </div>
      </div>
    </>
  )
}

export default Section1