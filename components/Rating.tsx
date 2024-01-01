"use client";
import React, { useState } from "react";
import { Ratings } from "@/constants";

const Rating = () => {
  const [data, setData] = useState(0);
  return (
    <div className=" h-screen w-full flex flex-col gap-3 lg:gap-1 lg:flex-row items-center justify-center lg:justify-between lg:px-[150px]">
      <div className=" flex flex-col space-y-3 md:w-[600px] group">
        <h1 className=" text-4xl font-extrabold leading-snug text-center lg:text-start">
          Ratings by performance
        </h1>
        <div className=' h-[4px] rounded-full w-[200px] bg-accent group-hover:w-[230px] transition-all duration-300 delay-100' />
        <span className=" font-medium text-center text-sm2 lg:text-start leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quos cumque enim magnam veritatis et velit impedit, exercitationem hic
          fugit cum neque natus, quam pariatur ab. Aut ratione repudiandae
          maxime!
        </span>
      </div>
      <div className=" flex flex-col gap-3 lg:flex-row">
      {/* rating */}
      <div className=" flex flex-row items-center lg:items-start justify-center lg:flex-col">
        {Ratings.map((item: any, itemIndex: number) => (
          <span
            key={itemIndex}
            onClick={() => setData(itemIndex)}
            className={` ${
              data === itemIndex ? "bg-blue-600 dark:bg-spice dark:text-secondary text-neutral-100 " : "bg-primary text-white dark:text-white dark:bg-blue-600"
            } m-2 p-2 rounded-md uppercase font-bold cursor-pointer w-full flex items-center justify-center`}
          >
            {/* title */}
            {item.title}
          </span>
        ))}
      </div>
      <div>
        {/* data select */}
        {Ratings[data].info.map((info_data: any, infoIndex: number) => (
          <div className=" flex items-center flex-col justify-evenly space-y-3 md:w-[400px] h-[250px] bg-blue-600 text-black dark:text-neutral-100 font-bold text-lg text-center m-2 lg:p-2 rounded-md">
            {/* dscription */}
            <span className=" leading-10 p-2 text-sm2">{info_data.desc}</span>
            {/* number */}
            <span className=" text-2xl uppercase dark:text-neutral-200 tracking-widest dark:bg-secondary bg-spice p-2 rounded-md">{info_data.number}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Rating;
