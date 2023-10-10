"use client"

import { useState } from "react"
import CircleIcon from "./icons/CircleIcon"
import ThreeBarsIcon from "./icons/ThreeBarsIcon"
import React from "react"
import { motion } from "framer-motion"
import { NavbarLinks } from "@/lib/constants"
import Link from "next/link"
import DarkModeButton from "./DarkModeButton"


const SmallMenu = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const [selectItem, setSelectItem] = useState<string>("")
  return (
    <React.Fragment>
        <button onClick={() => setToggleMenu(prev=>!prev)} className="lg:hidden">
            {toggleMenu ? <CircleIcon iconClass="w-6 h-6"/> : <ThreeBarsIcon iconClass="w-6 h-6"/>}
        </button> 
        <motion.ul
            initial={{ y: "-100vh", opacity: 1 }}
            animate={
              toggleMenu ? { y: 0, opacity: 1 } : { y: "-100vh", opacity: 1 }
            }
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className={`fixed left-1 top-24 z-50 flex h-[calc(100vh-100px)] w-[98%] flex-col items-center gap-4 overflow-scroll rounded-md p-4 pt-8 backdrop-blur-md md:left-2.5`}
          >   
              {
                NavbarLinks?.map((link)=>(
                  <Link key={link.name} href={link.link} 
                    onClick={()=> {
                      setSelectItem(link.element)
                      setToggleMenu(prev => !prev)
                    }} 
                    className={`group flex items-center justify-center cursor-pointer gap-4`}>
                    <span className={`group-hover:text-blue-200 ${link.element === selectItem && "text-blue-200 dark:text-gray-500"}`}>{link.icon}</span>
                    <span className={`relative text-md font-normal font-poppins hover:text-blue-500  ${link.element === selectItem && "underline decoration-blue-500 underline-offset-4 font-semibold dark:text-blue-500"}`}>{link.name}</span>
                  </Link>
                ))
              }
              <DarkModeButton/>
        </motion.ul>
    </React.Fragment>
  )
}

export default SmallMenu