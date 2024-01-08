"use client";
import React from 'react'
import { Umma } from '@/public';
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import CustomButton from './CustomButton';
import { FcRightUp2 } from 'react-icons/fc'
import { sequence } from '@/constants'

const NewHero = () => {
  return (
    <>
    <div className=' absolute w-full h-[450px] lg:h-[500px] top-0'>
      <Image 
      src={Umma}
      quality={100}
      priority
      alt='hero-image'
      width={500}
      height={500}
      className=' w-full h-full object-cover'
      />
    </div>
    <div className=' flex items-center justify-center'>
    <div className=' h-[450px] w-full bg-umma' />
    </div>
    <div className=' flex flex-col justify-center items-center lg:flex-row lg:justify-center'>
        {/* text */}
        <div className=' mt-20 flex flex-col items-center justify-center'>
            {/* scaffold */}
            <div
            className=' text-center space-y-5 flex flex-col items-center justify-center'
            >
                {/* header text */}
            <div className=" flex items-center gap-3 mb-3">
            <div className=" w-10 h-1 lg:w-12 lg:h-2 rounded-full bg-spice" />
            <span className=" text-xl lg:text-2xl font-bold capitalize text-neutral-900 dark:text-white">
                Umma Tech Hub
            </span>
            <div className=" w-10 h-1 lg:w-12 lg:h-2 rounded-full bg-blue-600" />
        </div>
        {/* title */}
        <h1 className=" flex flex-wrap flex-col uppercase font-extrabold text-primary text-3xl lg:text-[36px] xl:text-4xl tracking-wider leading-10 text-center ">
          Fostering{" "}
          <span className=" text-spice overflow-hidden">
            <TypeAnimation
             sequence={sequence}
             deletionSpeed={20}
             speed={20}
             repeat={Infinity}
             />
          </span>
          at a whole new level
        </h1>
        {/* subtitle */}
        <span className=" font-medium text-neutral-800 text-center lg:w-[60%] dark:text-white leading-10 text-sm2 sm:mx-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          sint, quasi, beatae amet nam porro quo debitis ad impedit voluptas
          dolorum sapiente veritatis perferendis culpa minus iste repellendus
          illo optio?
        </span>
        <div className=" my-2">
            <CustomButton
            title="Explore More"
            containerStyles=" bg-neutral-900 px-4 py-3 rounded-md hover:bg-blue-600 dark:text-white text-white font-bold flex items-center gap-3 group"
            icon={<FcRightUp2 />}
            />
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewHero