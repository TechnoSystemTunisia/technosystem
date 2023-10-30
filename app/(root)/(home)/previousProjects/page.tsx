import ProjectCardVertical from '@/components/ProjectCardVertical'
import { PreviousProjectsList } from '@/lib/constants'
import React from 'react'

const PreviousProjects = () => {
  return (
    <section className='flex w-full h-full min-h-[calc(100vh-100px)] justify-center'>
      <ul className='grid grid-cols-gallery auto-rows-[10px] gap-4 m-4 w-full max-w-[1460px]'>
        {
          PreviousProjectsList.map((project, index) => 
            (
              <ProjectCardVertical key={`projectCardVertical${index}`} project={project} index={index}/>
            )
          )
        }
      </ul>
    </section>
  )
}

export default PreviousProjects