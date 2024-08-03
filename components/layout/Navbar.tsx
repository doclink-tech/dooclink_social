import React from 'react'
import { Input } from '../ui/input'

const NavBar = () => {
  return (
    <div className='h-16 w-full border-b shadow-sm items-center flex flex-1 bg-white fixed top-0 z-10'>
      <div className='flex flex-grow mx-72'>
        <div className='w-[27rem]'> 
          <Input placeholder='Search' className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default NavBar