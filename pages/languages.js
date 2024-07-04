import Image from 'next/image'
import React from 'react'

function Languages() {
  return (
    <div className='min-h-screen'>
        <div className='flex flex-wrap justify-center gap-5 p-5 m'>
    <Image width={400} height={400} alt='php' src="/images/1.jpg" className='rounded opacity-80 hover:opacity-100 transition-all hover:scale-105 cursor-pointer'/>
    <Image width={400} height={400} alt='design' src="/images/2.jpg" className='rounded opacity-80 hover:opacity-100 transition-all hover:scale-105 cursor-pointer'/>
    <Image width={400} height={400} alt='javascript' src="/images/3.jpg" className='rounded opacity-80 hover:opacity-100 transition-all hover:scale-105 cursor-pointer'/>
    <Image width={400} height={400} alt='django' src="/images/4.jpg" className='rounded opacity-80 hover:opacity-100 transition-all hover:scale-105 cursor-pointer'/>
    </div>
    </div>
    
  )
}

export default Languages