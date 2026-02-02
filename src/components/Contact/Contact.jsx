import React from 'react'

function Contact() {
  return (
    <div className='bg-[#1C1C1F] flex flex-col items-center gap-10 text-white'>
     <h1 className='text-3xl md:text-4xl font-bold mt-20'>Get In Touch With Us</h1>   
    <div className=' md:w-200 flex flex-col items-center md:items-start md:pl-40 justify-center px-4 mb-10 
    rounded-2xl border-2 border-[#14d9aa]'>
        <div className='flex flex-col md:flex-row md:gap-24 mb-2 md:mb-8 text-md font-medium mt-20'>Name:
            <input type="text" placeholder='Enter Name' className='bg-white text-black border-2 border-[#14d9aa] rounded-md pl-2'/>
        </div>
        <div className='flex flex-col md:flex-row md:gap-25 mb-2 md:mb-8 text-md font-medium'>Email:
            <input type="text" placeholder='Enter Email' className='bg-white text-black border-2 border-[#14d9aa] rounded-md pl-2'/>
        </div>
        <div className='flex flex-col md:flex-row md:gap-7 mb-2 md:mb-8 text-md font-medium'>Phone Number:
            <input type="text" placeholder='Enter Phone Number' className='bg-white text-black border-2 border-[#14d9aa] rounded-md pl-2'/>
        </div>
        <div className='flex flex-col md:flex-row md:gap-19 mb-2 md:mb-8 text-md font-medium'>Message:
            <input type="text" placeholder='Enter Message' className='bg-white text-black border-2 border-[#14d9aa] rounded-md pl-2'/>
        </div>
        <button className='bg-[#14d9aa] hover:bg-[#18a892] text-white font-bold px-4 py-1.5 rounded-2xl mt-4 md:ml-43'>Submit</button>
        <address>
            <div className='bg-pink-700 h-60 md:h-80 w-50  md:w-90 md:ml-10 mt-10 mb-10 overflow-hidden rounded-2xl border-2 border-[#14d9aa]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.808470442113!2d72.89835477409508!3d33.6102736409411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df977e449888c3%3A0x168f58ae8be51865!2sIslamabad%20Motorways%20Toll%20Plaza%2C%20Islamabad%20Link%20Rd%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739485508869!5m2!1sen!2s" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </address>
    </div>
    </div>
  )
}

export default Contact
