import React from 'react'
import TeamMembImg1 from '../../assets/TeamMembImg1.webp'
import FitnessTrainer from '../../assets/FitnessTrainer.webp'
import BodyBuildingCoach from '../../assets/BodyBuildingCoach.webp'
import YogaInstructor from '../../assets/YogaInstructor.webp'
import ConditionalCoach from '../../assets/ConditionalCoach.webp'
function Team() {
  const gymTrainers = [
    {
        id: 0,
        img: FitnessTrainer,
        role: "Fitness Trainer",
        name: "Alex Carter",
        description: "Alex specializes in strength training and endurance workouts, helping clients build muscle and stamina."
    },
    {
        id: 1,
        img: BodyBuildingCoach,
        role: "Bodybuilding Coach",
        name: "Ryan Mitchell",
        description: "Ryan is an expert in muscle building and body transformation, crafting personalized plans for dream physiques."
    },
    {
        id: 2,
        img: YogaInstructor,
        role: "Yoga Instructor",
        name: "Ethan Parker",
        description: "Ethan focuses on balance, flexibility, and mindfulness, helping clients achieve mobility and relaxation through yoga."
    },
    {
        id: 3,
        img: ConditionalCoach,
        role: "Strength & Conditioning Coach",
        name: "Daniel Brooks",
        description: "Daniel helps individuals improve strength, agility, and overall athletic performance with power training techniques."
    }
];
  return (
    <div className='bg-[#1C1C1F] h-150 w-full text-white flex flex-col gap-3 items-center pr-4 pl-4 overflow-hidden'>
      <h1 className='text-3xl md:text-4xl font-bold mt-20'>Our Team Experts</h1>
      <h3 className='text-1xl md:text-2xl font-medium'>Our expert team is dedicated to guiding, motivating, and supporting you on your fitness journey.</h3>
      <div className=' overflow-x-auto flex gap-5 flex-nowrap'>
      {gymTrainers.map((trainer)=>(
      <div key={trainer.id} className=' min-w-[31%] md:min-w-70 flex justify-center items-start gap-3 md:gap-2 p-1 mt-7 md:mt-12 rounded-2xl overflow-hidden border-2 border-[#14d9aa] '>
        <div className=' flex flex-col gap-3'>
          <img src={trainer.img} className='w-lg mt-3' />
          <h3 className='text-[#14d9aa] text-2xl md:text-lg font-bold'>{trainer.role}</h3>
        </div>
        <div className='flex flex-col gap-1 mt-1'>
          <h2 className='text-[#14d9aa] text-xl md:text-lg font-bold'>{trainer.name}</h2>
          <p className='text-md md:text-lg font-medium'>{trainer.description}</p>
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Team
{/*  */}