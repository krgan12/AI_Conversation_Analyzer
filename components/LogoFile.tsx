import React from 'react'
import Image from 'next/image'

function LogoFile() {
  return (
    <div>
       <Image 
        height={125}
        width={125}
        src="/images/AICA_logo.png"
        alt='AICA Logo'
        />
    </div>
  )
}

export default LogoFile