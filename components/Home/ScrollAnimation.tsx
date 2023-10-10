"use client"

import { motion, useScroll } from 'framer-motion';
import React from 'react'

const ScrollAnimation = () => {
    const { scrollYProgress } = useScroll({
      offset:["0 0.1", "1 1.33"]
    });
    console.log('scrollYProgress', scrollYProgress);
  return (
    <motion.div
    className="min-h-screen h-full border-blue-500 border-[1px] -z-10 "
    style={{ scaleY: scrollYProgress }}
  />
  )
}

export default ScrollAnimation


