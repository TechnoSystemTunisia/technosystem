"use client"

import { NavbarLinks } from '@/lib/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import HomeIcons from './icons/HomeIcons'

const HomeMenuList = () => {
    const [selectItem, setSelectItem] = useState("")
  return (
    <ul className='h-full items-center gap-10 text-xl hidden lg:flex'>
        {
            NavbarLinks?.map((link)=>(
                <Link key={link.name} href={link.link} onClick={()=> setSelectItem(link.element)} className={`group flex items-center justify-center`}>
                  <span className={`group-hover:text-blue-200 ${link.element === selectItem && "text-blue-200 dark:text-gray-500"}`}>{link.icon}</span>
{/*                   <span className={`relative text-md font-normal font-poppins hover:text-blue-500  ${link.element === selectItem && "underline decoration-blue-500 underline-offset-4 font-semibold dark:text-blue-500"}`}>{link.name}</span> */}
                  </Link>
            ))
        }
    </ul>
  )
}

export default HomeMenuList