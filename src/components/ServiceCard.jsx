import React from 'react'

const ServiceCard = ({img, animate, heading, paragraph}) => {
    return (
        <div className='bg-gradient-to-l from-[#59D3AA] to-[#050023] hover:bg-red-400 duration-300 flex justify-center overflow-hidden items-center lg:w-[48%] border-l-8 border-[#59D3AA]  '>
            <div className=' flex bg-[#050023] items-center m-2 w-full  duration-300' >
                <div className='text-white w-[65%] flex flex-col gap-x-4 gap-y-8 px-4 py-10 group'>
                    <div>
                        <h1 className='text-3xl font-semibold'>{heading}</h1>
                    </div>
                    <div>
                        <p className='text-gray-300'>
                           {paragraph}
                        </p>
                    </div>
                    <div className=''>
                        <button className='text-white font-semibold group-hover:animate-pulse rounded-full  px-6 py-2 bg-[#6318F1] hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-150'>Explore More</button>
                    </div>
                </div>

                <div className='  w-[33%] h-full px-2 '>
                    <img className={`w-full h-full ${animate} `} title='image' src={img}  >
                    </img>
                </div>
            </div>
        </div>

    )
}

export default ServiceCard