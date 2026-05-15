'use client'
import { AudioLines } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

function loading() {

            {/* Center Icon */}
  return (
    <div className='flex relative botton-15 h-[700px] w-full items-center justify-center bg-[#fcfcfc]'>
        <div className="flex flex-col items-center">

            {/* Spinner */}
            <div>

                {/* Outer Glow */}
                {/* <div className='absolute inset-0 rounded-full bg-violet-500/20 blur-2xl'></div> */}

                {/* Rotating Ring */}
                <div className='h-12 w-12 animate-spin rounded-full border-[6px] border-black border-t-white'></div>


                {/* Center Icon */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    {/* <AudioLines className='h-8 w-8 text-violet-600'/> */}
                </div>
            </div>

            {/* Text */}
            <motion.div animate={{scale: [1, 1.1, 1]}}
            transition={{repeat: Infinity, duration: 1.5}}
            >
            <div className="mt-8 text-center">
                <h2 className='text-xl font-semibold text-black'>
                    Loading Workspace
                </h2>
            
                <p className='mt-2 text-sm text-neutral-500'>
                    Preparing your AI audio dashboard...
                </p>
            </div>      
            </motion.div>   
        </div>
    </div>
  )
}

export default loading