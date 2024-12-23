import React from 'react'
import { motion } from 'framer-motion'
import car1 from '../assets/About.png'
import hurracon from '../assets/hurracon evo.webp'
import { div } from 'framer-motion/client'

function Cards({item}) {
  return (
    <div className='group'>

        <motion.div 
        
        className='border rounded-lg flex flex-col gap-3 items-center justify-center py-10 px-10 bg-red-50 group-hover:bg-sky-400 transition-all duration-75 ease-in delay-150 '>
            <img src={item.img} alt="" className='w-60' />
            <h3 className='font-semibold text-xl group-hover:text-white delay-150'>{item.name}</h3>
            <p className='text-gray-700 group-hover:text-white delay-150'>{item.desc}</p>
            <div className='flex justify-between items-center gap-6 pt-2'>
                <p className='font-semibold group-hover:text-white delay-150'>{item.price}</p>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:scale-110 transition-all group-hover:bg-white group-hover:text-red-500 delay-150 '>Book Now</button>
            </div>

        </motion.div>
        </div>
  )
}

export default Cards