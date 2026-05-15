'use client'
import React from 'react'
import LogoFile from './LogoFile'
import LogoText from './LogoText'
import Link from 'next/link'
import { BadgeAlert, ChevronUpIcon, File, Folder, FolderClosed, FolderClosedIcon, FolderSearch, FoldersIcon, FolderSymlink, LayoutDashboard, LucideFolderSearch, Wand } from 'lucide-react'
import { ClerkLoaded, UserButton, useUser } from '@clerk/nextjs'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface Props {
  collapsed: boolean;
}

function SideBar({collapsed} : Props) {
    const { isSignedIn, user } = useUser();
  return (
    // <aside className='flex h-screen w-[256px] flex-col border-r border-black/5 bg-[#fafafa]'>
    <aside className={cn('flex h-screen flex-col border-r border-black/5 bg-[#fafafa] transition-all duration-300 ease-in-out',
      collapsed ? 'opacity-0 w-0' : 'w-[256px]'
    )}>
        {/* Top */}
        <div className='border-b border-black/5 px-6 py-7  pb-px relative'>
            <Link href='/' className='flex items-center gap-3 relative bottom-2'
            >
                <LogoFile />
                {!collapsed && (
                  <div className='flex flex-col leading-tight relative'>
                    <div className='relative top-2'>
                        <LogoText />
                    </div>
                    <span className='text-bg relative right-11 bottom-1 font-semibold text-neutral-500'>
                        Studio
                    </span>
                </div>
                )}
                
            </Link>
        </div>

        {/* Nav Links */}
        <div className='flex flex-1 flex-col px-4 py-6'>        
            <nav className='space-y-2'>
                {sidebarLinks?.map((item) => {
                    const Icon = item?.icon;
                    return (
                        <Link key={item?.title}
                        href={item?.href}
                        className={cn('hover:bg-red-500 group flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium text-neutral-700 transition-all duration-200',
                            "hover:bg-black/[0.04] hover:text-black"
                        )}
                        >
                            <Icon className='h-5 w-5 text-neutral-500 transition-colors group-hover:text-black' />

                            {/* <span>{item?.title}</span> */}
                            {!collapsed && (
                              <span>{item?.title}</span>
                            )}
                        </Link>
                    )
                })}
            </nav>
        </div>

        
       <div className='border-t border-black/5 p-4'>
  <ClerkLoaded>
    {isSignedIn && (
      <div className='relative'>
        {/* Hidden REAL Clerk Trigger */}
        <div className='absolute opacity-0 pointer-events-none'>
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'clerk-trigger',
                userButtonPopoverCard:
                  'mb-2 shadow-2xl border border-black/10',
              },
            }}
          />
        </div>

        {/* Custom Profile Card */}
        <div
          role='button'
          tabIndex={0}
          onClick={() => {
            const trigger = document.querySelector(
              '.clerk-trigger'
            ) as HTMLElement;

            trigger?.click();
          }}
          className='w-full h-15 cursor-pointer rounded-2xl border border-black/5 bg-white p-3 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:shadow-md'
        >
          <div className='flex items-center justify-between gap-3'>
            {/* Left Side */}
            <div className='flex items-center gap-3'>
              {/* Avatar */}
              <img
                src={user?.imageUrl}
                alt='profile'
                className='h-8 w-8 rounded-full object-cover'
              />

              {/* User Info */}
              <div className='flex flex-col overflow-hidden'>
                <p className='truncate text-sm font-semibold text-black'>
                  {user?.username ||
                    user?.firstName ||
                    'User'}
                </p>

                <p className='truncate text-xs text-neutral-500'>
                  {
                    user?.primaryEmailAddress
                      ?.emailAddress
                  }
                </p>
              </div>
            </div>

            {/* Chevron */}
            <div className='rounded-lg p-1.5 transition hover:bg-black/5 relative right-4 bottom-0.4'>
              <ChevronUpIcon className='h-4 w-4 text-neutral-500' />
            </div>
          </div>
        </div>
      </div>
    )}
  </ClerkLoaded>
</div>
    </aside>
  )
}

export default SideBar