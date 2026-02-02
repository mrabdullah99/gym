import React from 'react'

function FrequentlyAskQs() {
    const questions=[
        {
            id: 0,
            ques: "1. What are your gym’s operating hours?",
            ans: "We are open 5:00 AM – 11:00 PM (Mon-Sat) and 7:00 AM – 8:00 PM (Sun)."
        },
        {
            id: 1,
            ques: "2. Do you offer personal training?",
            ans: "Yes, our certified trainers provide one-on-one coaching and personalized workout plans."
        },
        {
            id: 2,
            ques: "3. Do you provide free trials?",
            ans: "Yes! We offer a one-day free trial so you can experience our gym before joining."
        },
        {
            id: 3,
            ques: "4. Is there a nutritionist available?",
            ans: "Yes, we have a certified nutritionist to help with diet plans and meal guidance."
        },
        {
            id: 4,
            ques: "5. Do you have locker and shower facilities?",
            ans: "Yes, we provide secure lockers, clean showers, and changing rooms for members."
        }
    ]
  return (
    <div className='bg-[#1C1C1F] text-white flex flex-col justify-center items-center md:items-start px-5'>
      <h1 className='text-3xl md:text-4xl font-bold mt-20 md:ml-90 mb-10'>Frequently Ask Questions</h1>
      {questions.map((ques)=>(
      <div key={ques.id} className=' flex flex-col md:ml-50 mb-10'>
        <h2 className='hover:text-[#18a892] text-lg font-medium'>{ques.ques}</h2>
        <p className='hover:text-[#18a892] mb-4'>{ques.ans}</p>
      </div>
    ))}
    </div>
  )
}

export default FrequentlyAskQs
