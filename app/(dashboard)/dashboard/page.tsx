'use client'
import SideBar from '@/components/SideBar'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { ArrowRight, AudioLines, Clock3, Folder, FolderClosed, Headphones, Mic, Music, Sparkle, Sparkles, WandSparkles } from 'lucide-react'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'


function Dashboard() {

  const { user } = useUser();

  const createdAt = user?.createdAt ?
  new Date(user.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  }): 'Recently';


  return (
    <div className='space-y-7'>
      {/* HERO */}

      <section className='space-y-2'>
        <h1 className='text-[28px] font-semibold tracking-tight text-black'>
          Welcome back, {user?.username || user?.firstName || 'User'}! 👋
        </h1>

        <p className='text-[15px] text-neutral-500'>
          Here's an overview of your Text-To-Speech Workspace
        </p>
      </section>

      <section className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {/* CARD 1 */}
        <div className='rounded-2xl border border-black/5 bg-white p-4 max-w-[400px] shadow-sm'>
          <div className='flex items-center justify-between'>
            <div className='rounded-2xl bg-violet-100 p-2.5'>
              <AudioLines className='h-4 w-4 text-violet-600' />
            </div>

            <span className='text-xs text-neutral-400'>
              TTS generations
            </span>
          </div>

          <div className="mt-5">
            <h2 className='text-2xl font-bold text-violet-500'>
              0
            </h2>

            <p className='mt-1 text-sm font-semibold text-black'>Total Audio</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='rounded-2xl border border-black/5 bg-white p-4 max-w-[400px] shadow-sm'>
          <div className='flex items-start justify-between'>
            <div className='rounded-2xl bg-blue-100 p-2.5'>
              <FolderClosed className='h-5 w-5 text-blue-600' />
            </div>

             <span className='text-xs text-neutral-400'>
              Projects created
            </span>
          </div>

          <div className='mt-8'>
            <h2 className='text-2xl font-bold text-blue-600'>
              0
            </h2>

             <p className='mt-1 text-sm font-semibold text-black'>
              This Month
             </p>
          </div>
        </div>

        {/* card 3 */}
         <div className='rounded-2xl border border-black/5 bg-white p-4 max-w-[400px] shadow-sm'>
          <div className='flex items-start justify-between'>
            <div className='rounded-xl bg-emerald-100 p-2.5'>
              <Clock3 className='h-5 w-5 text-emerald-600' />
            </div>

             <span className='text-xs text-neutral-400'>
              Recent Activity
            </span>
          </div>

          <div className='mt-5'>
            <h2 className='text-2xl font-bold text-emerald-500'>
              0
            </h2>

             <p className='mt-1 text-sm font-semibold text-black'>
              This Week
             </p>
          </div>
        </div>

        {/* c4 */}
         <div className='rounded-2xl border max-w-[400px] border-black/5 bg-white p-5 shadow-sm'>
          <div className='flex items-start justify-between'>
            <div className='rounded-xl bg-orange-100 p-2.5'>
              <Sparkles className='h-5 w-5 text-orange-500' />
            </div>

             <span className='text-xs text-neutral-400'>
              Account Created
            </span>
          </div>

          <div className='mt-8'>
            <h2 className='text-2xl font-semibold bg-gradient-to-r from-orange-500 via-orange-300 to-red-500 bg-clip-text text-transparent'>
              {createdAt}
            </h2>

             <p className='mt-1 text-sm font-semibold text-black'>
              Member Since
             </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className='flex items-center gap-2'>
          <Sparkles className='h-6 w-6 text-yellow-500' />
          <h2 className='text-lg font-semibold text-black'>Quick Actions</h2>

          <p className='mt-1 text-sm text-neutral-500'>Jump directly into your workflow</p>
        </div>

        <div className='grid grid-cols-1 gap-4 xl:grid-cols-3'>

          {/* PRIMARY */}
          <Link href='/dashboard/analyze'
          className='group relative max-w-[500px] overflow-hidden rounded-2xl bg-violet-600 p-5 text-white transition-all duration-300 hover:scale-[1.01]'
          >
          <div className='absolute right-0 top-0 h-24 w-24 rounded-full bg-white/10 blur-3xl'></div>

          <div className="relative z-10">
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-white/10'>
              <WandSparkles className='h-5 w-5'/>
            </div>

            <div className="mt-7">
              <h3 className='text-lg font-semibold'>Analyze Audio</h3>

              <p className='mt-2 text-sm text-violet-100'>Upload and analyze speech instantly</p>

              <div className='mt-4 flex items-center gap-2 text-sm font-medium'>
                Get Started

                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
              </div>
            </div>
          </div>
          </Link>

          {/* Secondary */}
          <Link href='/dashboard/projects'
          className='rounded-2xl max-w-[500px] border border-black/5 bg-white p-5 shadow-sm transition hover:border-black/10 hover:shadow-md'
          >
          <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]'>
            <Sparkles className='h-4 w-4 text-black' />
          </div>

          <div className='mt-7'>
            <h3 className='text-xl font-semibold'>View Projects</h3>

            <p className='mt-2 text-sm text-neutral-500'>
              Manage audio projects and exports
            </p>
          </div>
          </Link>

          {/* Secondary */}
          <Link href='/dashboard/projects'
          className='rounded-2xl max-w-[500px] border border-black/5 bg-white p-5 shadow-sm transition hover:border-black/10 hover:shadow-md'
          >
          <div className='flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.04]'>
            <Sparkles className='h-4 w-4 text-black' />
          </div>

          <div className='mt-7'>
            <h3 className='text-lg font-semibold'>
              Workspace Settings
            </h3>

            <p className='mt-2 text-sm text-neutral-500'>
              Customize your AI analysis workspace
            </p>
          </div>
          </Link>
        </div>
      </section>

      {/* RECENT ANALYSIS */}
      <section className="space-y-4">
        <div className='flex gap-2 items-center'>
          <Music className='h-6 w-6 text-purple-500'/>
          <h2 className='text-lg font-semibold text-black'>Recent Audio Analysis</h2>

          <p className='mt-1 text-sm text-neutral-500'>Your latest generated and analyzed voices</p>
        </div>

        <div className='rounded-2xl border border-black/5 bg-white p-8 shadow-sm'>
          <div className='flex min-h-[350px] items-center justify-center rounded-xl border border-dashed border-black/10 bg-[#fafafa]'>
            {/* <p className='text-sm text-neutral-400'>
              No Audio Analysis Projects Yet.
            </p> */}
                <>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="relative mb-4">
                      <div className="border-solid  bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed">
                        <Music className="text-purple-700 h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      No audio projects yet
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Start generating speech with AI voice cloning
                    </p>
                    
                    <Button
                      asChild
                      // onClick={() => router.push("/dashboard/analyze")}
                      className="gap-2 bg-purple-600 hover:bg-purple-700 hover:cursor-pointer"
                    >
                      <Link href='/dashboard/analyze'>
                      <Mic className="h-4 w-4" />
                      Create Your First Audio
                      </Link>
                    </Button>
                    
                  </div>
                </>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard