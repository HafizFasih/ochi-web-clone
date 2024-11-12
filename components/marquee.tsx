"use client"
import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed="0.1" data-scroll-section className='h-[60vh] w-full bg-[rgba(0,77,67)] flex items-end rounded-tr-3xl rounded-tl-3xl py-8 '>
        <div className="border-t-[1px] border-b-[1px] w-full h-[40vh] flex items-center text-[50vh] font-bold font-['FoundersGrotesk'] pb-10 flex-row whitespace-nowrap overflow-hidden tracking-wide">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='pr-10'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 10}} className='pr-10'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee;
