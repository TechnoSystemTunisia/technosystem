
import React from 'react'
import Image from 'next/image'
import { motion, useScroll } from "framer-motion";
import ScrollAnimation from '../ScrollAnimation';

const Hero = () => {

  
  return (
    <section id='about' className='flex justify-center w-full p-4 min-h-[calc(100vh-80px)] border-b-2 border-gray-400 bg-hero-bg bg-inherit bg-no-repeat bg-cover'>  
      <ScrollAnimation/>
      <div className='flex flex-col items-center justify-center gap-10 my-4 max-w-[1460px]'>
        <div className='flex flex-col items-center justify-center lg:w-[70%] w-full p-4 gap-4'>
          <div className='flex flex-col items-center w-full text-center'>
            <h1 className='font-extrabold text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-amber-600 to-gray-200 capitalize'>nos expertises</h1>
            <h1 className='font-extrabold text-transparent text-4xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 capitalize'>a votre service</h1>
          </div>
          <p className='w-full lg:w-[80%] text-center'>Entreprise spécialisé dans la fourniture et l'installation de systèmes de télécommunication de haute qualité. Notre équipe dévouée propose une gamme variée d'équipements et de services de pointe, assurant des solutions de communication fluides pour les entreprises, les maintenant en tête dans le monde dynamique des télécommunications</p>
        </div>
        <Image
          width={60}
          alt='Hero-Image'
          height={40}
          src="/HeroImage.jpg"
          className='lg:w-[50%] w-full h-[300px ] lg:h-[500px] object-cover rounded-lg shadow-lg shadow-black dark:shadow-white flex justify-center'
          unoptimized={true}
        />
      </div>
    </section>  
  )
}

export default Hero