"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from "next/image"

/* type ProjectProps = {
        projectName: string,
        projecDescription: string,
        projectClient: string,
        projectImages: ImageProps[]
}

type ImageProps = {
    url: string,
    width: number,
    height: number,
} */
  

const ProjectCardVertical = ({ project, index} : {project: any, index:number}) => {
    const widthHeightRatio = project.projectImages[0].height / project.projectImages[0].width
    const galleryHeight = Math.ceil(350 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1
  return (
    <AlertDialog>
        <AlertDialogTrigger className="group relative w-full lg:w-[350px] justify-self-center rounded-md cursor-pointer overflow-hidden"
            style={{ gridRow: `span ${photoSpans}` }}>
                <Image
                    src={project.projectImages[0].url}
                    alt="project-image"
                    width={project.projectImages[0].width}
                    height={project.projectImages[0].height}
                    className="h-full w-full object-cover absolute top-0"
                    unoptimized={false}
                />
                <div className={`hidden group-hover:flex relative flex-col p-4 text-center gap-4 text-white hover:bg-black/60 h-full justify-center`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{project.projectName}</h5>
                    <p className="mb-3 font-normal">{project.projecDescription}</p>
                </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>
                <span className="text-xl font-semibold">Projet: </span>
                <span className="text-xl font-normal">{project.projectName}</span>
            </AlertDialogTitle>
            <AlertDialogTitle>
                <span className="text-xl font-semibold">Client: </span>
                <span className="text-xl font-normal">{project.projectClient}</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
                {project.projecDescription}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Fermer</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProjectCardVertical