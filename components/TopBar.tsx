'use client'
import { sidebarLinks } from '@/constants';
import { Book, Expand, ListCollapse, LucideListCollapse, LucidePanelLeft, PanelLeft } from 'lucide-react';
import { usePathname } from 'next/navigation'
import React from 'react'
import { Collapsible } from './ui/collapsible';

interface Props {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

function TopBar({collapsed, setCollapsed}: Props) {
  const pathname = usePathname();

  // Find current route
  const currentRoute = sidebarLinks.find(
    (item) => item?.href === pathname
  )

  return (
    <header className='sticky top-0 z-30 flex h-[60px] items-center border-b border-black/5 px-8 bg-[#fcfcfc]'>
      <div className='flex items-center gap-4 relative right-3.5'>

        {/* Collapse button */}
        <button
        onClick={() => {
          setCollapsed(!collapsed)
        }}
        className='flex hover:cursor-pointer w-8 h-8 items-center justify-center rounded-lg transition hover:bg-black/[0.04]'
        >
          <PanelLeft className='hover:cursor-pointer h-4 w-4 text-neutral-600' />
        </button>

        {/* Divider */}
        <div className='relative right-2 text-[#c5c5c5]'>|</div>
        
        {/* Route Title */}
        <h1 className='text-sm font-medium text-black relative right-2' >
          {currentRoute?.title || "Dashboard"}
        </h1>

      </div>
    </header>
  )
}

export default TopBar