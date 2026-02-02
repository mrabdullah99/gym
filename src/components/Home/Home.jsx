import React from 'react'
import HomeBgImage from '../../assets/HomeBgImage.jpg'
import img from '../../assets/img.jpeg'
function Home() {
  return (
    <div 
    // style={{backgroundImage:`url(${img})`}}
    className='bg-[#1C1C1F] h-135 w-full flex justify-center items-center px-4'>
      <div className=' flex flex-col justify-center items-center md:items-start gap-y-2'>
        <h1 className='text-[#14d9aa] text-4xl md:text-6xl font-bold'>Build Your Tommorow</h1>
        <h5 className='text-[#14d9aa] text-lg md:text-xl font-medium'>The only bad workout is the one you didn't do.</h5>
        <button className='bg-[#14d9aa] hover:bg-[#18a892] text-white text-lg md:text-xl font-bold rounded-2xl w-40 h-12 mt-10 
        md:mt-20 '>Start Today</button>
      </div>
    </div>
  )
}
export default Home