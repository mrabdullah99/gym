import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <nav className='bg-[#1C1C1F] text-white w-full'>
    <div className='flex justify-between items-center'>
      <div className='text-white text-4xl font-bold ml-3 md:ml-10 mt-5'>
        Gym
      </div>
      <div className=' flex gap-x-5 md:gap-x-9'>
        <div className=' text-sm  font-[500] hidden md:flex gap-x-5 items-center'>
          <a href="" className='hover:text-[#18a892]'>Home</a>
          <a href=""  className='hover:text-[#18a892]'>Services</a>
          <a href=""  className='hover:text-[#18a892]'>Clubs</a>
          <a href=""  className='hover:text-[#18a892]'>Our Team</a>
          <a href="" className='hover:text-[#18a892]'>Stories</a>
          <a href='' className='hover:text-[#18a892]'>Pricing</a>
          <a href="" className='hover:text-[#18a892]'>Contact</a>
      </div>
      <button className='bg-[#14d9aa] hover:bg-[#18a892] text-white font-bold px-4 py-1.5 rounded-2xl md:mr-2'>Sign In</button>
      <button className='bg-[#14d9aa] hover:bg-[#18a892] text-white font-bold px-4 py-1.5 rounded-2xl mr-2 md:hidden'
        onClick={()=>setIsOpen(!isOpen)}><FontAwesomeIcon icon={(isOpen)?faXmark:faBars} /></button>
      </div>
    </div>
    {isOpen && (
      <ul className="bg-[#14d9aa]  md:hidden flex flex-col gap-y-2 mt-2 text-lg text-center p-4 rounded-lg">
        <li className='hover:bg-[#18a892]'><a href="#" >Home</a></li>
        <li className='hover:bg-[#18a892]'><a href="#" >About</a></li>
        <li className='hover:bg-[#18a892]'><a href="#" >Services</a></li>
        <li className='hover:bg-[#18a892]'><a href="#" >Contact</a></li>
      </ul>
    )}
    </nav>
  )
}
export default Navbar