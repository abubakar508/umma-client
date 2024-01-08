"use client";
import Image from 'next/image';
import React from 'react';
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';

const BlogCard = ({post, index} : any) => {
  return (
    <div key={index} className=' p-2 w-full md:w-[350px] shadow-md border rounded-lg flex flex-col items-center'>
      <div className=' w-full md:w-[320px] h-[300px] md:h-[350px]'>
        <Link href={`preview/${post.currentSlug}`} >
        <Image
        src={urlFor(post.titleImage).url()}
        width={200}
        height={200}
        alt=''
        className=' w-full h-full object-cover'
        />
        </Link>
      </div>
        <h1 className=' p-2 text-xl md:text-2xl font-bold dark:text-green-500'>
            {post.title}
        </h1>
        <span className=' text-[12px]'>
         {post.desc.slice(0,80)} . . .
        </span>
        <div className=' flex items-center justify-between px-2 w-full'>
          <div className=' p-4 bg-green-500 aspect-square rounded-md' />
          <Link href={`preview/${post.currentSlug}`} className=' hover:underline text-[12px] p-2'>Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard;