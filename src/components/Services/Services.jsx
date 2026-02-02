import React, { useState } from 'react'
import WeightLiftingImg from '../../assets/WeightLiftingImg.jpg'
import CardioImg from '../../assets/CardioImg.jpg'
import ChestImg from '../../assets/ChestImg.jpg'
import ServiceCard from './ServiceCard'
function Services() {
    const cards=[
        {id:1, img:WeightLiftingImg, title:"WeightLifting" , type:"Strength"  },
        {id:2, img:CardioImg, title:"InDoor Cycling" , type:"Cardio"},
        {id:3, img:ChestImg, title:"Bench Press" , type:"Strength" },
    ]
  return (
    <div className='bg-[#1C1C1F] md:h-dvh h-130 w-full flex flex-col gap-10 md:gap-20 '>
            <h1 className='text-white text-center text-3xl md:text-4xl font-bold mt-1'>Services We Provide</h1> 
            <div className=' h-90 overflow-x-auto flex flex-nowrap flex-row gap-5 md:gap-7 ml-5 md:justify-center'>
                <ServiceCard p={cards[0]} />
                <ServiceCard p={cards[1]} />
                <ServiceCard p={cards[2]} />
            </div>
    </div>
  )
}
export default Services