'use client'
import { motion } from 'motion/react'
import React from 'react'

function Loading() {
  return (
    <div className='container'>
        {/* <div className='spinner'></div> */}
        <motion.div className='spinner'
        animate={{ transform: 'rotate(360deg)' }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
        }}
        >
            
        </motion.div>
    </div>
  )
}

export default Loading