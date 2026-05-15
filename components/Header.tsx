import React from 'react'
import HeaderMenu from './HeaderMenu'

import Container from './Container'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'
import LogoBackground from './LogoBackground'

function Header() {
  // const user = await 
  return (
    <header className='sticky top-0 z-50 bg-[#f8fafc]/80 border-b border-b-[#ebeff5]'>
      <Container className='flex h-16 items-center justify-between gap-7 text-lightColor'>
        {/* Logo - Left Side */}
      <div className='w-auto md:w-1/3 flex items-center justify-center'>
        <LogoBackground />
      </div>
      {/* CenterBar */}
      <HeaderMenu />
      {/* RightBar */}
      <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>

        <Link className={`text-gray-700 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 has-[>svg]:px-2.5 cursor-pointer`} href='/sign-in'>
          <p>Sign In</p>
        </Link>
        <Link href="/sign-up">
          <Button variant='default' className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 rounded-md px-3 has-[>svg]:px-2.5 cursor-pointer gap-2">Try Free<ArrowRightIcon />
          </Button>
        </Link>
        
      </div>
      </Container>
    </header>
  )
}

export default Header