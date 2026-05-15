'use client'
import headerData from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function HeaderMenu() {
    const pathname = usePathname();
    
  return (
    <div className='hidden md:inline-flex w-1/3 items-start gap-5 text-sm capitalize font-medium'>
        {headerData?.map((item) => (
        <Link className={`'text-base relative left-18.5  group hover:text-[#327b8c] transition-all ease-in-out duration-300'`} key={item?.href} href={item?.href}>
            {item?.title}
            <span className='absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#327b8c] hoverEffect group-hover:w-1/2 group-hover:left-0' />
            <span className='absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-[#327b8c] hoverEffect group-hover:w-1/2 group-hover:right-0' />
        </Link>

    ))}</div>
  )
}

export default HeaderMenu