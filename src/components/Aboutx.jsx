import React from 'react'
import About from '../assets/Aboutx.webp'
import { motion } from 'framer-motion'
// import { FadeUp } from '../utikity/Animation'
import maintenance from '../assets/maintenance.png'
import steering from '../assets/steering.png'
import battery from '../assets/battery.png'
import tyre from '../assets/tyre.png'


function Aboutx() {
    return (
        <div className='relative bg-red-50'>
            <div className='max-w-7xl lg:h-[650px] h-[300px] mx-auto  pt-10'>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='flex flex-col '>
                    <img src={About} alt="" className='' />
                    <div className='p-2 lg:flex flex-col space-y-2 lg:w-52 w-20 mx-auto text-center justify-center absolute top-0 left-72'>
                        <div className='bg-orange-50 mx-auto rounded-full'>
                            <img src={steering} alt="" className='w-20 p-2 ' />
                        </div>
                        <h3 className='font-semibold text-sm lg:text-lg hidden lg:block'>BATTERY REPAIR</h3>
                        <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                        <h4 className='text-red-500 hidden lg:block'>Read More</h4>
                    </div>
                    <div className='p-2 lg:flex flex-col space-y-2 w-20 lg:w-52 mx-auto text-center justify-center absolute lg:top-48 top-36 right-6 lg:right-0'>
                        <div className='bg-orange-50 mx-auto rounded-full'>
                            <img src={battery} alt="" className='w-20 p-2 ' />
                        </div>
                        <h3 className='font-semibold hidden lg:block'>BATTERY REPAIR</h3>
                        <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                        <h4 className='text-red-500 hidden lg:block'>Read More</h4>
                    </div>
                    <div className='p-2 lg:flex flex-col space-y-2 w-20 lg:w-52 mx-auto text-center justify-center absolute top-36 lg:top-52 left-6 lg:left-0'>
                        <div className='bg-orange-50 mx-auto rounded-full'>
                            <img src={tyre} alt="" className='lg:w-20  p-2' />
                        </div>
                        <h3 className='font-semibold hidden lg:block'>BATTERY REPAIR</h3>
                        <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                        <h4 className='text-red-500 hidden lg:block'>Read More</h4>
                    </div>
                    <div className='p-2 lg:flex flex-col space-y-2 w-20 lg:w-52 mx-auto text-center justify-center absolute top-0 right-72'>
                        <div className='bg-orange-50 mx-auto rounded-full'>
                            <img src={maintenance} alt="" className='w-20 p-2 ' />
                        </div>
                        <h3 className='font-semibold hidden lg:block'>BATTERY REPAIR</h3>
                        <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
                        <h4 className='text-red-500 hidden lg:block'>Read More</h4>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Aboutx