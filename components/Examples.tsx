
'use client'
import { Brain, Sparkle } from 'lucide-react'
import React, { useRef, useState } from 'react'

import {Play, Pause, Sparkles, BrainCircuit, AudioLines} from 'lucide-react'
import Link from 'next/link'
import { communicationExamples, tonalityExamoles } from '@/constants'

function AudioPlayer({ src, className } : {src: string , className?: string}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
    else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div>
      <audio ref={audioRef} src={src}></audio>
      <button onClick={toggleAudio}
      className='flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:scale-105 hover:border-violet-300 hover:shadow-md'>
        {isPlaying ? (
          <>
            <Pause className='h-4 w-4'/>
            Pause
          </>
        ): (
          <>
            <Play className='h-4 w-4 fill-black'/>
            Play
          </>
        )}
      </button>
    </div>
  )
}

function Examples() {
  return (
   <section className="relative overflow-hidden py-28">
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
      <div className='absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-md px-2 bg-violet-200/20 blur-3xl'></div>
    </div>

    <div className='mx-auto w-full max-w-7xl px-6 lg:px-10'>
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className='mb-6 inline-flex items-center gap-2 rounded-md px-2  border border-violet-200 bg-violet-50 px-5 py-2'>
          <BrainCircuit className='h-4 w-4 text-violet-600' />
          <span className="text-sm font-semibold text-violet-700">
            AI Communication Intelligence
          </span>
        </div>

        <h1 className='text-4xl font-black tracking-tight text-black sm:text-5xl'>
          Deep Insights from{' '}
          <span className='bg-gradient-to-r from-[#6d5efc] via-[#4f7cff] to-[#00c2cb] bg-clip-text text-transparent'>
            Human Dialogue
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
           Analyze real communication styles, speaking patterns, tonality,
          and conversational behavior using advanced AI voice intelligence.
        </p>

        {/* First Table */}
        <div className='mt-20 overflow-hidden w-[1000px] relative right-25 rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-100'>
          {/* Header */}
          <div className='grid grid-cols-1 border-b border-gray-200 bg-gray-50 px-8 py-5 text-sm font-semibold text-gray-600 md:grid-cols-[1.2fr_0.8fr_5fr]'>
            <p>Text Sample</p>
            <p>Analyzed Speaker</p>
            <p>Example Response Analysis</p>
          </div>

          {/* Rows */}
          {communicationExamples.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-6 border-b border-gray-100 px-8 py-8 transition-colors duration-300 hover:bg-gray-50 md:grid-cols-[1.2fr_0.8fr_5fr]"
            >
              {/* Text */}
              <div>
                <p className="text-base leading-7 text-gray-700">
                  “{item.text}”
                </p>
              </div>

              {/* Speaker */}
              <div className="flex items-start pt-1">
                <div className="rounded-2xl bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  {item.speaker}
                </div>
              </div>

              {/* QA */}
              {/* <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 min-w-[28px] shrink-0 items-center justify-center rounded-md bg-violet-600 text-xs font-bold text-white">
                    Q
                  </div>

                  <p className="text-sm font-medium text-gray-700">
                    {item.question}
                  </p>
                </div>

                <div className="mt-4 flex gap-3">
                  <div className="flex h-7 w-7 min-w-[28px] shrink-0 items-center justify-center rounded-md bg-cyan-500 text-xs font-bold text-white">
                    A
                  </div>

                  <p className="text-sm leading-6 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div> */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <div className="grid grid-cols-[28px_5fr_28px_5fr] gap-4 items-start">

                  {/* Q badge */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-600 text-xs font-bold text-white">
                    Q
                  </div>

                  {/* Question text */}
                  <p className="text-sm font-medium text-gray-700 leading-5">
                    {item?.question}
                  </p>

                  {/* A badge */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500 text-xs font-bold text-white">
                    A
                  </div>

                  {/* Answer text */}
                  <p className="text-sm text-gray-600 leading-6">
                    {item?.answer}
                  </p>

                </div>

              </div>
            </div>
          ))}

          {/* Tonality Section */}
          <div className='mt-24'>
            <div className='mb-8 items-center gap-3'>
              {/* <AudioLines className='h-6 w-6 text-violet-600' /> */}
              <h2 className='text-3xl font-black text-black'>Tonality Differences</h2>
            </div>

            <div className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-100'>
              {/* Table Header */}
              <div className='grid grid-cols-1 border-b border-gray-200 bg-gray-50 px-8 py-5 text-sm font-semibold text-gray-600 md:grid-cols-4'>
                <p>Speaker</p>
                <p>Sample Question</p>
                <p>Pitch Level</p>
                <p>Audio Output</p>
              </div>

              {/* Rows */}
              {tonalityExamoles.map((item, index) => (
                <div key={index} className="grid grid-cols-1 gap-6 border-b border-gray-100 px-8 py-7 transition-colors duration-300 hover:bg-gray-50 md:grid-cols-4">
                  <div>
                    <div className='inline-flex rounded-2xl bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700'>
                      {item?.speaker}
                    </div>
                  </div>

                  <div>
                    <p className='text-sm text-gray-700'>
                      {item?.question}
                    </p>
                  </div>

                  <div>
                    <span className='rounded-md px-2 border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700'>
                      {item?.pitch}
                    </span>
                  </div>

                  <div className='relative left-13 hover:cursor-pointer'>
                    <AudioPlayer src={item?.audio} className="hover:cursor-pointer"/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA  */}
          <div className='mt-24 pb-10 text-center'>
            <p className='text-xl font-medium text-gray-700'>Ready to analyze your own recorded conversations?</p>

            <Link href='/dashboard'>
              <button className='group mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r hover:cursor-pointer from-[#6d5efc] via-[#4f7cff] to-[#00c2cb] px-7 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#111] hover: shadow-2xl'>
                <Sparkles className='h-5 w-5 transition-transform duration-300 group-hover:rotate-12'/>
                Try it Free Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Examples