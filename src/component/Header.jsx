import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <div className=''>
      
        {/* logo */}

        <Link href='/' className='hidden lg:inline-flex'>
          <Image
            src='/Instagram_logo_black.webp'
            width={96}
            height={96}
            
            
            alt='instagram logo'
          />
        </Link>

        <Link href='/' className='lg:hidden '>
          <Image
            src='/800px-Instagram_logo_2016.webp'
            width={40}
            height={40}
            alt='instagram logo'
          />
        </Link>
        <input
          type='text'
          placeholder='Search'
          className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]'
        />

<button
  
  className='text-sm font-semibold text-blue-600'
>
  Log In
</button>




        </div>
        
    </div>
  )
}

export default Header
