import React from "react";
import { SanityClient } from "@/lib/sanity";
import BlogCard from "@/components/BlogCard";

export const revalidate = 30;

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
    const data = await SanityClient.fetch(query);
    return data;
  }

  const data = await getData();

  return (
    <>
      <div className=" pt-32" />
      <div className=" lg:px-24 px-2 mb-10">
        <h1 className=" text-xl font-bold">Latest Blog</h1>
      </div>
      <div className=" lg:px-24 px-2 grid gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.slice(0,4).map((post: any, index: number) => (
          <BlogCard post={post} index={index} />
        ))}
      </div>
      <div className=" lg:px-24 px-2 mb-10">
        <h1 className=" text-xl font-bold">Earlier Blog</h1>
      </div>
      <div className=" lg:px-24 px-2 grid gap-3 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((post: any, index: number) => (
          <BlogCard post={post} index={index} />
        ))}
      </div>
    </>
  );
};

export default page;
