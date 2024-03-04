import React from 'react'
import LayeredSLider from './LayeredSLider'


const HeroSec = () => {
    return (

        <div className=' flex justify-center items-center  lg:mx-20'>

            <div className='grid lg:grid-cols-2  grid-cols-1  bg-gradient-to-r rounded-3xl from-[#110D2E] to-transparent    lg:py-16 py-10 my-40'>
            <div class=" absolute inset-0 translate-x-[10px] -left-20 top-12 z-10  bg-gradient-to-b w-[33%]  rounded-full h-[450px] blur-3xl from-purple-600/60 opacity-30 via-purple-500/60 to-purple-400/60 "></div>

                <div className="flex flex-col  text-white justify-center   lg:py-12 lg:px-10 p-4  rounded-sm  lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold lg:text-6xl lg:px-10">
                        The Metaverse to Diversity & Customized Technology
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 lg:px-10">
                    Connecting & Linking you to ideal software resources, freeing you to prioritize what truly counts.
                    </p>
                    <div className="flex sm:items-center justify-center lg:px-10 sm:flex-row sm:space-y-0 space-x-4 lg:justify-start ">
                        <button class="px-6 py-2 bg-[#6318F1] hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-110 duration-200 text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg">
                            Join Now
                        </button>
                        <button class="px-6 py-2 bg-[#35314D] hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-110 duration-200 text-white font-bold rounded-full transition-transform transform-gpu  hover:shadow-lg">
                            Explore &#160;
                        </button>

                    </div>

                </div>

                <div className='  lg:pb-0 py-10 px-4 sm:px-28  md:px-52 lg:px-8 xl:px-20 2xl:px-40'>
                    <LayeredSLider />
                </div>
            </div>
        </div>

    )
}

export default HeroSec