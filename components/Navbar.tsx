"use client";
import React, { useState } from 'react'
import { ModeToggle } from './modeToggle'
import Link from 'next/link'
import NavMobile from './NavMobile';
import { navItems } from '@/constants';
import Image from 'next/image';
import { NewUmma, } from '@/public';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()
  const [nav, setNav] = useState(false)
  return (
   
<nav className="bg-white border-gray-200 dark:bg-gray-900 z-50 absolute w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href='/'>
      <Image
      src={NewUmma}
      width={100}
      height={50}
      alt='logo'
      quality={100}
      priority
      />
    </Link>
    <button
    onClick={() => setNav(!nav)}
    type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
   { nav && (
    <NavMobile closemodal={() =>setNav(!nav)} />
   )}
   <div className=" hidden w-full md:block md:w-auto" id="navbar-default">

<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 items-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

  {navItems.map((link: any, index:number) => (

              <li key={index}>
              <Link href={link.path} className={`block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-500 ${link.path === pathname ? ' text-primary' : ' text-blue-600'} `} aria-current="page">{link.name}</Link>
            </li>
  ))}
  <ModeToggle />
</ul>

</div>

  </div>
</nav>


    
  )
}

export default Navbar