import React from 'react'
import { SanityClient } from '@/lib/sanity'
import BlogCard from '@/components/BlogCard';



const page = async () => {
  async function getData() {
    const query = `
    *[_type == 'blog']| order(_createdAt desc) {
     title,
       desc,
       "currentSlug":slug.current,
       titleImage
   }
    `;
    const data =  await SanityClient.fetch(query)
    return data;
   }

   const data =  await getData();
   

  return (
    <>
    <div className=' lg:px-24 px-2 mb-10'>
      <h1 className=' text-xl font-bold'>Latest Blog</h1>
    </div>
    <div className=' lg:px-24 px-2 grid md:grid-cols-2 lg:grid-cols-4'>
        {data.map((post: any, index: number) => (
          <BlogCard post={post} index={index} />
        ))}
    </div>
    </>
  )
}

export default page