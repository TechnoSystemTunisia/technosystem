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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

type ProjectProps = {
        projectName: string,
        projecDescription: string,
        projectClient: string,
        imageUrls: ImageProps[]
}

type ImageProps = {
    url: string,
    width: number,
    height: number,
}
  

const ProjectCardVertical = ({ project, index} : {project: ProjectProps, index:number}) => {
    const widthHeightRatio = project.imageUrls[0].height / project.imageUrls[0].width
    const galleryHeight = Math.ceil(350 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1
    
  return (
    <AlertDialog>
        <AlertDialogTrigger className={`group relative h-full w-full lg:w-[350px] justify-self-center rounded-md cursor-pointer overflow-hidden bg-blue-600`}
            style={{ gridRow: `span ${photoSpans}` }}>
                <Image
                    src={project.imageUrls[0].url}
                    alt="project-image"
                    width={project.imageUrls[0].width}
                    height={project.imageUrls[0].height}
                    className="h-full w-full object-cover absolute top-0"
                    unoptimized={true}
                />
                <div className={`hidden group-hover:flex relative flex-col p-4 text-center gap-4 text-white hover:bg-black/60 h-full justify-center`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{project.projectName}</h5>
                    <p className="mb-3 font-normal">{project.projecDescription}</p>
                </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-screen h-screen">
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
            <AlertDialogDescription className="flex flex-col w-full gap-2 max-h-[500px] overflow-y-auto p-2">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                    project.imageUrls.map((image, index)=>(
                        <SwiperSlide key={index}>
                            <Image
                                key={index}
                                src={image.url}
                                alt="project-image"
                                width={image.width}
                                height={image.height}
                                className="h-full w-full object-cover rounded-md"
                                unoptimized={true}
                            />
                        </SwiperSlide>
                    ))
                    }             
                </Swiper>
            </AlertDialogDescription>
            <AlertDialogFooter>
            <AlertDialogCancel>Fermer</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default ProjectCardVertical

function uuidv4() {
    throw new Error("Function not implemented.")
}
