"use client"

import { clientsLogo, suppliersLogo } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReferenceList() {

    const staggerVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: (index:number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.2,
          repeat:Infinity,
          duration:10
        },
      }),
      exit: { opacity: 0, x: -100 }, // Fade out and move to the left
    };
  
  return (
    <section className="flex w-full flex-col items-center gap-4">
        <div className="flex w-full items-center gap-4 overflow-hidden bg-gray-200 rounded-sm p-2">
            {/* LARGE SCREEN */}
            <motion.div
                className="hidden lg:flex w-full gap-8 h-32"
                initial={{ x: '100%' }} // Start off-screen to the left
                animate={{ x: '-100%' }}    // Animate to the right
                transition={{ duration: 10, repeat: Infinity, type: 'tween', ease: 'easeInOut' }} // Smooth transition
            >
                {clientsLogo.map((client, index) => ( 
                    <Image
                        key={index}
                        src={client}
                        height={50}
                        width={200}
                        alt="Client-Logo"
                        className="object-contain"
                        unoptimized={false}
                    />
                ))}
            </motion.div>
            {/* SMAL SCREEN */}
            <motion.div
                className="flex flex-wrap items-center lg:hidden w-full gap-2 justify-center"
            >
                {clientsLogo.map((client, index) => ( 
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }} // Start off-screen to the left
                        whileInView={{ opacity: 1 }}    // Animate to the right
                        transition={{ duration: 1, delay: index * 0.2, type: 'spring', ease: 'easeInOut' }} // Smooth transition
                    >
                        <Image
                            src={client}
                            height={50}
                            width={150}
                            alt="Client-Logo"
                            className="object-contain"
                            unoptimized={false}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
        <div className="flex w-full items-center gap-4 overflow-hidden bg-gray-200 rounded-sm p-2">
            {/* LARGE SCREEN */}
            <motion.div
                className="hidden lg:flex w-full gap-8 h-32"
                initial={{ x: "-100%" }} // Start off-screen to the left
                animate={{ x: "100%" }}    // Animate to the right
                transition={{ duration: 10, repeat: Infinity, type: 'tween', ease: 'easeInOut' }} // Smooth transition
            >
                {suppliersLogo.map((supplier, index) => ( 
                    <Image
                        key={index}
                        src={supplier}
                        height={50}
                        width={150}
                        alt="Client-Logo"
                        className="object-contain"
                        unoptimized={false}
                    />
                ))}
            </motion.div>
            {/* SMAL SCREEN */}
            <motion.div
                className="flex flex-wrap items-center lg:hidden w-full gap-4 justify-center"
            >
                {suppliersLogo.map((supplier, index) => ( 
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }} // Start off-screen to the left
                        whileInView={{ opacity: 1 }}    // Animate to the right
                        transition={{ duration: 1, delay: index * 0.2, type: 'spring', ease: 'easeInOut' }} // Smooth transition
                    >
                        <Image
                            src={supplier}
                            height={200}
                            width={100}
                            alt="Client-Logo"
                            className="object-contain h-[100px] w-[140px]"
                            unoptimized={false}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}