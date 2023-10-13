"use client"

import Image from 'next/image'
import ScrollAnimation from '../ScrollAnimation'
import { motion } from 'framer-motion';

const WhoWeAre = () => {

  const variants = {
    visible: { opacity: 1, scale: [0.85, 0.87, 0.89, 0.91, 0.93, 0.95, 0.97, 1], y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -200
    }
  };
  return (
    <section id='whoWeAre' className='flex items-center justify-center w-full p-4 min-h-[calc(100vh-80px)] border-b-2 border-gray-400'>
      <ScrollAnimation/>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        exit="hidden"
        transition={{ duration: 2, ease: "easeOut" }}
        className='flex flex-col  lg:flex-row-reverse items-center justify-center gap-20 px-4 my-4 max-w-[1460px]'>
        <div className='flex flex-col items-center lg:items-start justify-center lg:w-[50%] w-full gap-4'>
          <div className='flex flex-col items-center lg:items-start w-full'>
            <h1 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 capitalize text-center lg:text-left text-4xl lg:text-5xl'>qui sommes nous</h1>
          </div>
          <p className='w-full lg:w-[80%] text-center lg:text-left'>Établie en Tunisie en 2013, notre entreprise est une référence dans le domaine des télécommunications, systèmes d'alarme, d'incendie et de sécurité. Forts de plus d'une décennie d'expérience, nous fournissons des solutions de pointe pour garantir la sécurité et la communication efficace de nos clients. Nos équipes hautement qualifiées assurent l'installation, la maintenance et l'assistance technique pour garantir des performances optimales. Nous sommes fiers de contribuer à la sécurité et à la connectivité dans notre région et au-delà.</p>
        </div>
        <Image
        width={60}
        alt='Who-We-Are-Image'
        height={40}
        src="/Who-We-Are.jpg"
        className='w-[500px] object-cover rounded-lg shadow-lg shadow-black dark:shadow-white flex justify-center'
        unoptimized={true}
        />
      </motion.div>
  </section>  
  )
}

export default WhoWeAre