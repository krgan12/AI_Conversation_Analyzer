import LogoFile from '@/components/LogoFile'
import LogoText from '@/components/LogoText'
import { Bolt, Circle, CloudLightning, LucideCloudLightning, Mic, Star, Target } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { SignIn, SignUp } from '@clerk/nextjs'

function SignInPage() {
  return (
    //   <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
      
    //     {/* left side */}
    //     <div className='relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-12'>  
    //     {/* Logo + text -> white colour */}
    //     {/* Top branding */}
    //     <div className='flex items-center gap-2'>
    //       <Link href='/'>
    //         <LogoFile />
    //         <LogoText />
    //       </Link>
    //     </div>

    //     {/* middle content */}
    //     <div className='max-w-md space-y-6'>
    //       <h1 className='text-3xl font-semibold leading-tight'>
    //         Decode Human Conversation + Communication with AI
    //       </h1>

    //       <p className='text-slate-300'>Join thousands of analyzers using this technology everyday to boost their communication skills.</p>

    //       {/* Features */}
    //       <div className='space-y-4 pt-4'>
    //         <div className='flex items-center gap-3 text-slate-200'>
    //           <Mic className='w-5 h-5 text-indigo-400' /> <span>AI Voice Processing</span>
    //         </div>

    //         <div className='flex items-center gap-3 text-slate-200'>
    //           <Mic className='w-5 h-5 text-indigo-400' /> <span>Lightning Fast Processing</span>
    //         </div>

    //         <div className='flex items-center gap-3 text-slate-200'>
    //           <Target className='w-5 h-5 text-indigo-400' /> <span>Professional Quality Audio</span>
    //         </div>
    //       </div>
    //     </div>
       
    //     {/* <h1>Decode Human Conversation + Communication With AI</h1> */}
    //     {/* <p>Join thousands of analyzers using this technology everyday to boost their communication skills.</p> */}
    //     {/* <div>
    //       <Mic /> <h2>AI Voice Processing</h2>
    //       <CloudLightning /> <h2>Lightning Fast Processing</h2>
    //       <Target /> <h2>Professional Quality Audio</h2>
    //     </div> */}
    //     <div className='flex gap-10 text-sm text-slate-300'>
    //       <div>
    //         <div className='text-white text-xl font-semibold'>10K+</div>
    //         <div>Voices Generated</div>
    //       </div>
    //       {/* <h2>10K+</h2>
    //       <p>Voices Generated</p> */}
    //       {/* <h2>2.5K+</h2>
    //       <p>Happy Users</p>
    //       <h2>4.8 <Star /></h2>
    //       <p>Rating</p> */}
    //       <div>
    //         <div className='text-white text-xl font-semibold'>2.5K+</div>
    //         <div>Happy Users</div>
    //       </div>

    //       <div>
    //         <div className='text-white text-xl font-semibold flex items-center gap-1'>4.8
    //           <Star className='w-4 h-4 text-yellow-400'/>
    //         </div>
    //         <div>Rating</div>
    //       </div>
    //     </div>
    //   </div>
      
    //   {/* right side */}
    //   <div className='flex items-center justify-center bg-white p-6'>
    //     <div className='w-full max-w-md flex flex-col items-center justify-center'>

    //     {/* Mobile Logo */}
    //     <div className='lg:hidden flex items-center gap-2 mb-8'>
    //       <LogoFile />
    //       <LogoText />
    //     </div>
    //     <SignIn />
    //     </div>
    //   </div>
    // </div>

    <main className='h-screen w-screen overflow-hidden bg-white'>
      <div className='grid h-screen lg:grid-cols-2'>

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-[#0A0A0A] lg:flex">

          {/* background glow effects */}
          <div className='absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-3xl'></div>
          <div className='absolute bottom-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/20 blur-3xl'></div>

          <div className='relative z-10 flex w-full flex-col justify-between px-12 py-12 xl:px-20'>

            {/* Logo */}
            <Link href='/'
            className='flex items-center gap-3'
            >
              <LogoFile />
              <LogoText />
            </Link>

            {/* Main Content */}

            <div className="max-w-xl">
              <h1 className='text-5xl font-bold leading-tight tracking-tight text-white xl:text-6xl'>
                Decode HUman Conversation + Communication with AI
              </h1>

              <p className='mt-6 max-w-lg text-lg leading-relaxed text-gray-400'>
                Join thousands of analyzers using this technology everyday to boost their communication skills.
              </p>

              {/* Features */}
              <div className="mt-12 space-y-5">
                <div className="flex items-center gap-4">
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5'>
                    <Mic className='h-5 w-5 text-white'/>
                  </div>

                  <h2 className="text-base font-medium text-white">AI Voice Processing</h2>
                </div>

                <div className="flex items-center gap-4">
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5'>
                    <CloudLightning className='h-5 w-5 text-white'/>
                  </div>
                  <h2 className="text-base font-medium text-white">Lightning Fast Processing</h2>
                </div>

                <div className="flex items-center gap-4">
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5'>
                    <Target className='h-5 w-5 text-white'/>
                  </div>
                  <h2 className="text-base font-medium text-white">
                    Professional Quality Audio
                  </h2>
                </div>
              </div>

              {/* Stats */}
              <div className='mt-16 grid grid-cols-3 gap-10 relative bottom-8'>

                <div>
                  <h2 className='text-3xl font-bold text-white'>10K+</h2>
                
                  <p className='mt-2 text-sm text-gray-400'>Voices Generated</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">2.5K+</h2>

                  <p className='mt-2 text-sm text-gray-400'>Happy Users</p>
                </div>

                <div>
                  <div className='flex items-center gap-1'>
                    <h2 className="text-3xl font-bold text-white">4.8</h2>

                    <Star className='mt-1 h-5 w-5 fill-yellow-400 text-yellow-400' />
                  </div>

                  <p className="mt-2 text-sm text-gray-400">Rating</p>
                </div>
              </div>
            </div>

            {/* Bottom spacing alignment */}
            <div></div>
          </div>
        </div>

        <div className='flex h-screen items-center justify-center bg-white px-6 sm:px-10 lg:px-16'>

          <div className="w-full max-w-md">
            <SignUp />
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default SignInPage