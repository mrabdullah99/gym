import React from 'react'

function Offers() {
    const exclusiveOffers = [
        {
        id: 1,
        heading: "👯‍♂️ Refer & Earn – Bring a Friend, Get Rewarded!",
        description: "Invite a friend and get 1 month free, while they enjoy 20% off their first membership. More referrals, more rewards!",
        endDate: "Offer valid until March 31, 2025"
        },
        {
        id: 2,
        heading: "💼 Corporate Wellness Program – Fitness for Professionals",
        description: "Boost workplace wellness! Join our Corporate Membership for exclusive team discounts and a healthier work-life balance.",
        endDate: "Ongoing Exclusive Offer"
        },
        {
        id: 3,
        heading: "🏋️ Student Power Deal – Fitness on a Budget!",
        description: "Students, stay fit for less! Show your student ID and enjoy big discounts on memberships. Stay active, stay energized!",
        endDate: "Limited Time Offer – Grab it before it’s gone!"
        },
        {
        id: 4,
        heading: "💪 Couple’s Special – Train Together, Stay Strong!",
        description: "Sign up as a couple and enjoy discounted rates, fun partner workouts, and access to exclusive fitness sessions.",
        endDate: "Offer valid until February 28, 2025"
        }
        ]; 
  return (
    <div className='bg-[#1C1C1F] w-full text-white flex flex-col gap-3 items-center overflow-hidden pl-9'>
        <h1 className=' text-3xl md:text-4xl font-bold mt-20'>Exclusive Offers & Discount</h1>
        <h3 className='text-1xl md:text-2xl font-medium'>Unlock amazing savings and special perks with our exclusive gym offers and discounts!</h3>
        <div className='overflow-x-auto flex flex-nowrap gap-x-5 md:gap-x-7 ml-10 md:ml-8 md:mr-8 mt-10 mb-[30px] '>
        {exclusiveOffers.map((offer)=>(
            <div key={offer.id} className='bg-[1C1C1F] border-2 border-[#14d9aa] min-w-[30%] md:min-w-[16%] md:max-w-60 shadow-2xl rounded-2xl overflow-hidden 
            flex flex-col items-center gap-1 pr-4 pl-4'>
            <h5 className='text-[#14d9aa] text-xl md:text-lg font-bold mt-5'>{offer.heading}</h5>
            <p className=' text-md md:text-lg font-medium mt-6'>{offer.description}</p>
            <p className=' text-md md:text-lg font-medium mt-6'>{offer.endDate}</p>
            <button className='bg-[#14d9aa] hover:bg-[#18a892] text-white text-lg md:text-x. font-bold rounded-xl w-[220px] h-9
                mt-9 mb-10'>Available Now</button>
        </div>
        ))}
        </div>
    </div>
  )
}
export default Offers
