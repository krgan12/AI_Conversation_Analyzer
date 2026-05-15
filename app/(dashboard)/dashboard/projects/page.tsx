import React, {  } from 'react'
import { resolve } from 'path'
import Link from 'next/link';
import { AudioLines, FileQuestion, FolderOpen, FolderX, Plus, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import ProjectSearch from '@/components/ProjectSearch';

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function ProjectsPage() {
  await delay(500)
  
  const projects: any[] = [];

  return (
    <div className='space-y-7'>
      {/* Header */}
      <section className='flex items-center justify-between'>
        
        <div>
          <h1 className='text-[28px] from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl font-black'>Your Audio Projects</h1>
        

        <p className="mt-1 text-[15px] font-medium text-neutral-500">
          Manage your generated audio and voice analysis projects
        </p>
        </div>

        <Link href='/dashboard/analyze'
        className='flex items-center gap-2 text-white transition hover:bg-neutral-800 rounded-xl bg-black px-4 py-2.5 text-sm font-medium'
        >
          <Plus className='h-4 w-4' />
          New Project
        </Link>
      </section>

      <ProjectSearch />

      {/* Content */}
      <section className="rounded-3xl border border-black/5 bg-white shadow-sm">
        
        {projects?.length === 0 ? (
          <div className='flex min-h-[500px] flex-col items-center justify-center px-6 text-center'>

            {/* Icon */}
            <div className='relative mb-6'>
              {/* Glow */}
              <div className='absolute inset-0 rounded-full bg-violet-500/10 blur-2xl'></div>

              {/* Circle */}
              <div className='relative flex h-24 w-24 items-center justify-center rounded-full border border-black/5 bg-[#fafafa] shadow-sm'>
                {/* <FolderOpen className='h-10 w-10 text-neutral-400' /> */}
                <FolderX className='h-10 w-10 text-red-500' />
              </div>
            </div>

            {/* Text */}
            <h2 className='text-xl font-semibold tracking-tight text-black'>
              No audio projects yet
            </h2>

            <p className='mt-3 max-w-md text-sm leading-relaxed text-neutral-500'>
              Start creating text-to-speech audio to see your generated
              projects, voice analysis, and exports appear here.
            </p>

            {/* Button */}
            <Link href='/dashboard/analyze'
            className='mt-7 inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20'
            >
            <Plus className='h-4 w-4' />
            Create Your First Project
            </Link>
          </div>
        ) : (
          <div>
            {/* Future Project grid */}
          </div>
        )}
        
      </section>
    </div>
  )
}

export default ProjectsPage