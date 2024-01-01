"use client"
import Image from 'next/image'
import React from 'react'
import { Umma, vc } from '@/public'

const Leadership = () => {
  return (
    <div className=' h-screen flex flex-col justify-evenly gap-3 items-center mt-20 lg:flex-row lg:justify-between lg:px-24'>
        <div className=' text-center lg:text-start space-y-5 flex flex-col lg:w-[40%] group'>
          {/* title */}
            <h1 className=' text-2xl font-extrabold uppercase'>
                Leadership & Management
            </h1>
            <div className=' h-[4px] rounded-full w-[200px] bg-accent group-hover:w-[230px] transition-all duration-300 delay-100' />
            {/* desc */}
            <span className=' font-medium text-sm2 leading-10 p-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus qui debitis quae nam. Dolor suscipit modi, eveniet, quidem rerum laborum, corporis mollitia quisquam hic accusamus veritatis vel rem repudiandae.
            </span>
        </div>
        {/* refactor: swiper */}
      
          
    </div>
  )
}

export default Leadership