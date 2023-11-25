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
import { motion } from "framer-motion";
import Image from "next/image"

  

const ProjectCard = ({ project, index} : {project: IProject, index:number}) => {
    const variants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0 },
        };

        const transition = {
        duration: 1,
        delay: index * 0.2, // Adjust the delay based on the index
        type: "spring", 
        stiffness: 50
        };
  return (
    <AlertDialog>
        <AlertDialogTrigger className={`col-span-1 ${(index === 0 || index === 5) && "lg:col-span-2"}`}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={transition}
                className={`group  relative h-[300px] bg-white border border-gray-200 rounded-lg shadow shadow-black dark:shadow-white dark:bg-gray-800 dark:border-gray-700 overflow-hidden`}>
                <Image src={project.imageUrls[0].url} width={150} height={300} alt='card-image' className='w-full h-full object-cover blur-[5px] opacity-90 absolute group-hover:blur-none' unoptimized={true}/>
                <div className="flex h-full relative flex-col items-center justify-center p-4 text-center gap-4 text-white">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{project.projectName}</h5>
                    </a>
                    <p className="mb-3 font-normal">{project.projecDescription}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize">
                    détails
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    </a>
                </div>
            </motion.div>
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

export default ProjectCard