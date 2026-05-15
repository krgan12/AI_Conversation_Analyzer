import { Play, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HomeBanner() {
  return (
    <section className="relative overflow-hidden ]">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className='absolute top-[-120px] left-1/2 h-[350px] w-[350px] -translzte-x-1/2 rounded-full bg-violet-300/20 blur-3xl'></div>
        <div className='absolute bottom-[-80px] left-[20%] h-[250px] w-[250px] rounded-full bg-cyan-300/10 blur-3xl'></div>
        <div className='absolute right-[10%] top-[30%] h-[200px] w-[200px] rounded-full bg-blue-300/10 blur-3xl'></div>
      </div>

      <div className='mx-auto flex min-h-92vh max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:px-12'>
        {/* Badge */}
        <div className='mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-5 py-2 shadow-sm backdrop-blur-md'>
          <Sparkles className='h-4 w-4 text-violet-600'/>
          <span className='text-sm font-semibold text-violet-700'>Powered by Advanced AI</span>
        </div>

        {/* Small Heading */}
        <p className='mb-4 text-lg font-medium tracking-wide text-gray-600'>AI Conversation Analyzer</p>

        {/* Main heading */}
        <h1 className='max-w-6xl font-black text-5xl leading-[1.05] tracking-tight text-bold sm:text-4xl md:text-5xl lg:text-6xl'>
          Decode Human{' '}
          <span className='bg-gradient-to-r from-[#35888f] via-[#35888f] to-[#12b5d1] bg-clip-text text-transparent'>
            Conversation
          </span>{' '}
          <span className='bg-gradient-to-r from-[#35888f] via-[#1e9dd8] to-[#00c2cb] bg-clip-text text-transparent'>
            With AI
          </span>
        </h1>

        {/* Description */}
        <p className='mt-8 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl'>
          A machine learning platform for analyzing conversational behavior,
          speaker characteristics, vocal dynamics, and interaction patterns
          across human dialogue.
        </p>

        {/* Buttons */}
        <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row'>
          <Link href='/dashboard'>
          <button className='group flex items-center gap-3 rounded-2xl bg-black px-5 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#111] hover:shadow-2xl hover:cursor-pointer'>
            <Play className='h-5 w-5 fill-white transition-transform group-hover:translate-x-0.5'/>
            Try It Free Now
          </button>
          </Link>

          <Link href="/dashboard">
          <button className='group flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-5 py-4 text-base font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:border-gray-400 hover:shadow-lg'>
            <Play className='h-5 w-5 fill-white transition-transform group-hover:translate-x-0.5'/>
            Listen to Demo
          </button>
          </Link>
        </div>

        {/* Trusted Text */}

        <p className='mt-20 text-sm font-medium tracking-wide text-gray-500'>
          Trusted by thousands of creators worldwide
        </p>

        {/* Stats */}
        <div className='mt-10 grid w-full max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5'>
          <div className='flex flex-col items-center'>
            <h3 className='text-4xl font-extrabold text-gray-800'>50K+</h3>
            <p className="mt-2 text-sm text-gray-500">Voices Generated</p>
          </div>

           <div className='flex flex-col items-center'>
            <h3 className='text-4xl font-extrabold text-gray-800'>5K+</h3>
            <p className="mt-2 text-sm text-gray-500">Active Users</p>
          </div>

           <div className='flex flex-col items-center'>
            <h3 className='text-4xl font-extrabold text-gray-800'>99.9%</h3>
            <p className="mt-2 text-sm text-gray-500">Uptime</p>
          </div>

           <div className='flex flex-col items-center'>
            <div className='flex items-center gap-1'>
              <h3 className='text-4xl font-extrabold text-yellow-500'>4.8</h3>
              <Star className='h-7-w-7 fill-yellow-400 text-yellow-400'/>
            </div>
            <p className='mt-2 text-sm text-gray-500'>User Rating</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-extrabold text-gray-800">24/7</h3>
            <p className="mt-2 text-sm text-gray-500">Voice Analysis</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HomeBanner