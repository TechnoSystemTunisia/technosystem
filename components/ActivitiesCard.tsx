"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type IActivity = {
  activityName:string, 
  activityDescription:string,
  activityImage: string,
  index:number
}

const ActivitiesCard = ({activityName, activityDescription, activityImage, index}:IActivity) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 1,
    delay: index * 0.2, // Adjust the delay based on the index
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={transition}
      className="col-span-1 w-full md:w-[350px] h-[400px] bg-white border border-gray-200 rounded-lg shadow shadow-black dark:shadow-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <Image src={activityImage} width={150} height={200} alt='card-image' className='w-full h-[220px] object-cover' unoptimized={true}/>
        <div className="flex flex-1 flex-col items-center justify-center p-4 text-center gap-4">
            <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{activityName}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{activityDescription}</p>
        </div>
    </motion.div>
  )
}

export default ActivitiesCard