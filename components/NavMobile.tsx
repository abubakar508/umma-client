import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './modeToggle'
import { navItems } from '@/constants'
import { usePathname } from 'next/navigation'

interface NavMobileProps {
    closemodal: () => void;
}

const NavMobile = ({ closemodal}: NavMobileProps) => {
    const pathname: string = usePathname();

  return (
    <div onClick={closemodal} className=" w-full md:hidden md:w-auto" id="navbar-default">

      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

        {navItems.map((link: any, index:number) => (

                    <li key={index}>
                    <Link href={link.path} onClick={closemodal} className={`block py-2 px-3 rounded md:bg-transparent text-primary md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-500 ${link.path === pathname && 'bg-blue-500 text-white dark:bg-neutral-700 hover:bg-blue-500'} `} aria-current="page">{link.name}</Link>
                  </li>
        ))}

        <div className=' flex items-center p-4'>
        <ModeToggle />
        </div>
      </ul>
    </div>
  )
}

export default NavMobile