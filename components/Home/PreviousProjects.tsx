import React from 'react'
import ScrollAnimation from '../ScrollAnimation'
import { PreviousProjectsList } from '@/lib/constants'
import ProjectCard from '../ProjectCard'
import PlusIcon from '../icons/PlusIcon'
import Link from 'next/link'

const styles = {
  title:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize",
  subTitle:"mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
}


const PreviousProjects = () => {
  return (
    <section id='previouProjects' className='flex flex-col items-center justify-center w-full p-4 min-h-[calc(100vh-80px)] border-b-2 border-gray-400 overflow-hidden'>
      <div className='flex w-full h-full justify-center'>
        <ScrollAnimation/>
        <div className='flex flex-1 flex-col items-center justify-center m-4 max-w-[1460px] md:px-16 gap-10'>
          <div className='flex flex-col items-center justify-center w-full p-4 gap-4 text-center'>
            <div className='flex flex-col items-center w-full '>
              <h1 className={styles.title}>projet</h1>
            </div>
            <p className={styles.subTitle}>La satisfaction du client est notre  objectif principal</p>
          </div>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-0 w-full'>
            {PreviousProjectsList.slice(0,6).map((project, index)=>(
              <ProjectCard key={project.projectName} project={project} index={index}/>
            ))}
          </ul>
          <Link href={"/previousProjects"}>
            <PlusIcon iconClass="w-10 h-10 hover:text-blue-500 mt-16"/>
          </Link>
        </div>
      </div>
    </section> 
  )
}

export default PreviousProjects