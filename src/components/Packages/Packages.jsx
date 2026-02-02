import React from 'react'

function Packages() {
    const membershipPlanes=[
        {id:0, heading:"📅 Monthly Membership", point1:"✔ Flexible, no long-term commitment", point2:"✔ Full access to gym equipment & facilities", point3:"✔ Perfect for trying out our services before committing long-term"},
        {id:1, heading:"📆 Quarterly Membership", point1:"✔ A balanced plan for steady progress", point2:"✔ Three months of unlimited gym access", point3:"✔ Great for those aiming for short-term fitness goals"},
        {id:2, heading:"📅 Yearly Membership", point1:"✔ Best value for long-term commitment", point2:"✔ Unlimited access to all gym services for 12 months", point3:"✔ Helps maintain consistency and long-term fitness results"},
        {id:3, heading:"🔥 Premium Membership", point1:"✔ Exclusive perks, priority access & VIP treatment", point2:"✔ Includes personal training sessions & nutrition guidance", point3:"✔ Special discounts on fitness gear, supplements & more"},
        {id:4, heading:"👨‍👩‍👧‍👦 Family Package", point1:"✔ Affordable plan for the whole family", point2:"✔ Enjoy fitness together with group access", point3:"✔ Special discounts & family-friendly workout programs"}
    ]
  return (
    <div className='bg-[#1C1C1F] w-full text-white flex flex-col gap-3 items-center overflow-hidden pl-10'>
        <h1 className='text-white  text-3xl md:text-4xl font-bold mt-40'>Membership Packages</h1>
        <h3 className='text-white text-1xl md:text-2xl font-medium'>Pick your perfect membership & start your fitness journey today!</h3>
        <div className='overflow-x-auto flex flex-nowrap gap-x-5 md:gap-x-7 ml-10 md:ml-8 md:mr-8 mt-10 mb-[30px] 
        '>
        {membershipPlanes.map((plane)=>(
            <div key={plane.id} className='bg-[1C1C1F] border-2 border-[#14d9aa] min-w-[37%] md:min-w-[16%] md:max-w-60 shadow-2xl rounded-2xl overflow-hidden 
            flex flex-col items-center gap-1 pr-4 pl-4'>
            <h5 className='text-[#14d9aa] md:text-lg font-bold mt-5'>{plane.heading}</h5>
            <ul>
            <li className=' text-md md:text-lg font-medium mt-6'>{plane.point1}</li>
            <li className=' text-md md:text-lg font-medium'>{plane.point2}</li>
            <li className=' text-md md:text-lg font-medium'>{plane.point3}</li>
            </ul>
            <button className='bg-[#14d9aa] hover:bg-[#18a892] text-white text-lg md:text-xl font-bold rounded-xl w-[120px] h-8
                mt-12 mb-10'>Join Now</button>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Packages
