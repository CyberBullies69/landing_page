"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { TextGenerateEffect } from './text-generate-effect';
 

const Section1 = () => {
  const words = `Revolutionizing Healthcare Access for`;
  const words1 = `Professional and Employers`;
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-20'>
        <TextGenerateEffect className='text-black font-bold text-5xl mt-2' words={words} />
        <TextGenerateEffect className='text-blue-600 font-bold mt-2 text-5xl' words={words1} />
        <p className='max-w-screen-lg mt-2 text-center mt-2'>At DocLink, we believe in revolutionizing the way healthcare is accessed and delivered. Our comprehensive platform caters to the needs of medical professionals and employers, providing a seamless and innovative solution for all stakeholders in the healthcare industry.</p>
        <Button className='mt-5 px-10'>Join The WaitList</Button>

        <div className='mt-5'>
          <Image src="section1.svg" width={1000} height={100} alt='section1' priority={true}></Image>
        </div>
      </div>
    </>
  )
}

export default Section1