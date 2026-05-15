import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoFile from './LogoFile';
import LogoText from './LogoText';

function Logo() {
  return (
    <div>
        {/* <Link href="/">
        <Image className='top-3 left-[-165.5px] relative flex items-center' 
            //height={40} 
            //width={40} 
            height={125}
            width={125}
            src="/images/AICA_logo.png" alt='AICA Logo'>
        </Image>
        </Link> */}

        <Link href="/" className='relative left-[-128px] top-3 flex items-center gap-3'>
       <LogoFile />
        <LogoText />
        </Link>
        
    
    </div>
  )
}

export default Logo