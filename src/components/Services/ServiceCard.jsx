import React from 'react'

function ServiceCard({p}) {
  return (
        <div key={p.id} className='bg-[#14d9aa] border-2 border-[#14d9aa] h-80 min-w-[70%] md:min-w-[10%] shadow-2xl rounded-2xl overflow-hidden '>
            
                <img src={p.img} className='h-60 w-full object-cover'/>
            
            <div className=' text-white'>
                <h5 className='ml-5 mt-1 font-medium'>{p.type}</h5>
                <h1 className='ml-5 text-2xl font-bold'>{p.title}</h1>
            </div>
        </div>
  )
}
export default ServiceCard
//  md:min-w-[31%]
//  max-w-[300px] md:min-w-[30%] md:max-w-[350px] w-[250px]