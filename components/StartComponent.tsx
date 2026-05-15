import { Download, Sparkle, Sparkles, Upload } from 'lucide-react'
import React from 'react'

function StartComponent() {
  return (
    // <div className=''>
    //     <h1>Ready to Level-up your Communication?</h1>
    //     <p>Join thousands of analyzers using this technology everyday to boost their communication skills.</p>
    //     <button>
    //       <Sparkle />  Try it Free Now
    //     </button>
    //     <button>
    //       <Download /> Listen to Examples 
    //     </button>
    // </div>
    <section className='relative overflow-hidden py-20'>
        {/* Background glow / gradient */}
        <div className='absolute inset-0 -z-10 bg-gradient-to-b
         from-[#e7edff] via-[#e1f3fe] to-[#d9f8fc]'></div>

         {/* soft radial glow */}
         <div className=' absolute left-1/2 top-0 h-[400px] -translate-x-1/2 rounded-full bg-violet-500/20 bluer-[120px]'></div>

         {/* Content container */}
         <div className='mx-auto max-w-4xl px-6 text-center'>

            {/* badge  */}
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/5 px-4 py-2 text-sm text-black-300 backdrop-blur'>
                <Sparkles className='h-4 w-4 text-violet-400' />
                AI Communication Intelligence
            </div>

            {/* Heading */}
            <h1 className='text-4xl font-black tracking-tight text-black sm:text-5xl'>
                Ready to level-up your{' '}
                <span className='bg-gradient-to-r from-violet-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent'>communication?</span>
            </h1>

            {/* subtitle */}
            <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
                Join thousands of users analyzing conversations, improving tone, and mastering real-world communication skills using AI-powered insights
            </p>

            {/* Buttons */}
            <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>

                {/* Primary button */}
                <button className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 px-6 py-3 hover:bg-bg-gradient-to-r hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-400 font-semibold hover:scale-105 text-white shadow-lg transition-all duration-300  hover:cursor-pointer overflow-hidden">
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 "></div> */}
                  <span className='relative flex items-center gap-2'>
                  <Sparkles className='h-4 w-4 transition-transform group-hover:rotate-12'/>
                    Try it Free Now
                    </span>
                </button>

                {/* Secondary button */}
                <button className="group relative inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white/5 px-6 py-3 text-sm font-semibold text-black backdrop-blur transition-all duration-300 hover:scale-105 hover:cursor-pointer overflow-hidden">

                    <Download className='h-4 w-4'/>
                Listen to Examples
                </button>
            </div>
         </div>
    </section>
  )
}

export default StartComponent