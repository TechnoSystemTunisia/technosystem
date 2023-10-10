"use client"

import { motion } from "framer-motion";

export default function ReferenceList() {
  return (
    <section className="w-full flex flex-col items-center gap-4 overflow-hidden my-10">
        <motion.div
            className="flex w-full gap-8"
            initial={{ x: '100%' }} // Start off-screen to the left
            animate={{ x: '-55%' }}    // Animate to the right
            transition={{ duration: 10, repeat: Infinity, type: 'tween', ease: 'easeInOut' }} // Smooth transition
        >
            <span>Framer Motion</span>
            <span>Framer Motion</span>
            <span>Framer Motion</span>
            <span>Framer Motion</span>
            <span>Framer Motion</span>
            <span>Framer Motion</span>
        </motion.div>
        <motion.div
            className="flex w-full gap-8"
            initial={{ x: '-55%' }} // Start off-screen to the left
            animate={{ x: '100%' }}    // Animate to the right
            transition={{ duration: 10, repeat: Infinity, type: 'tween', ease: 'easeInOut' }} // Smooth transition
        >
            <span>Exampale Moves</span>
            <span>Exampale Moves</span>
            <span>Exampale Moves</span>
            <span>Exampale Moves</span>
            <span>Exampale Moves</span>
            <span>Exampale Moves</span>
        </motion.div>
    </section>
  );
}