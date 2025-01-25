import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='fixed z-50 max-w-[1550px] flex pl-12 pr-3 py-3 items-center top-12 justify-between left-[50%] w-[90%] rounded-full translate-x-[-50%] bg-white'>
        <div className='flex items-center gap-16'>
        <div>
            <Image width={120} height={120} src="logo.svg" alt="" />

        </div>
        <ul className='flex gap-4 text-gray-600'>
          <li className='hover:bg-[#e9e9e9] p-3 rounded-md'>Templates</li>
          <li className='hover:bg-[#e9e9e9] p-3 rounded-md'>Marketplace</li>
          <li className='hover:bg-[#e9e9e9] p-3 rounded-md'>Discover</li>
          <li className='hover:bg-[#e9e9e9] p-3 rounded-md'>Pricing</li>
          <li className='hover:bg-[#e9e9e9] p-3 rounded-md'>Learn</li>
        </ul>
        </div>
        <div className='text-black flex gap-3'>
          <button className='h-full p-5 rounded-md w-28 bg-[#eff0ec] hover:bg-[#e9e9e9]'>Log in</button>
          <button className='bg-[#1e2330] hover:bg-[#303541] w-40 rounded-full text-white p-5'>Sign up free</button>
        </div>
    </div>
  )
}

export default Navbar