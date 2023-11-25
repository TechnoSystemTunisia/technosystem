import ProjectCardVertical from '@/components/ProjectCardVertical'
import LoadingSpinner from '@/components/icons/LoadingSpinner'
import { getResources } from '@/sanity/actions'

export const revalidate = 86400;

const PreviousProjects = async () => {
  const projects:IProject[]  = await getResources()

  return (
    <section className='flex w-full h-full min-h-[calc(100vh-100px)] justify-center'>
      <ul className='grid grid-cols-gallery auto-rows-[10px] gap-4 m-4 w-full max-w-[1460px]'>
        {
          projects?.length > 0 ? projects.map((project:IProject, index:number) => 
          (
            <ProjectCardVertical key={`projectCardVertical${index}`} project={project} index={index}/>
          )
        ) : 
          <LoadingSpinner/>
        }
      </ul>
    </section>
  )
}

export default PreviousProjects