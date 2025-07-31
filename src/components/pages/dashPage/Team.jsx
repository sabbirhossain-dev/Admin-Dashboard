import React from 'react'
import User1 from '../../../assets/user01.png'
import User2 from '../../../assets/user02.png'
import User3 from '../../../assets/user03.png'

const Team = () => {
  return (
    <>
      <div className='w-full xl:w-1/2 bg-white dark:bg-gray-800 p-4 rounded-md pb-5'>
        <p className='text-xl font-semibold text-gray-700 dark:text-gray-200 mb-5'>Team</p>


        <div className='flex flex-col gap-5'>


          <div className='flex justify-between items-center'>
          <div className='flex gap-2 sm:gap-3'>
            <img src={User1} alt='profile' className='w-12 h-12 sm:w-14 sm:h-14 rounded-full'/>
            <div className=''>
              <p className='text-md sm:text-lg text-gray-700 font-semibold dark:text-gray-200'>Robert Fox</p>
              <p className='text-gray-600 text-sm sm:text-md dark:text-gray-300'>USA</p>
            </div>
          </div>
          <div className=' bg-yellow-100  text-gray-700 rounded-full'>
            <p className='p-2 sm:p-3 text-sm sm:text-md'>Python Developer</p>
          </div>
        </div>


         <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <img src={User2} alt='profile' className='w-12 h-12 sm:w-14 sm:h-14 rounded-full'/>
            <div className=''>
              <p className='text-md sm:text-lg text-gray-700 font-semibold dark:text-gray-200'>Jane Doe</p>
              <p className='text-gray-600 text-sm sm:text-md dark:text-gray-300'>UK</p>
            </div>
          </div>

          <div className=' bg-sky-100 text-gray-700  rounded-full'>
            <p className='p-2 sm:p-3 text-sm sm:text-md'>Frontend Developer</p>
          </div>
        </div>


         <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <img src={User3} alt='profile' className='w-12 h-12 sm:w-14 sm:h-14 rounded-full'/>
            <div className=''>
              <p
               className='text-md sm:text-lg text-gray-700 font-semibold dark:text-gray-200'>John Smith</p>
              <p className='text-gray-600 text-sm sm:text-md dark:text-gray-300'>Canada</p>
            </div>
          </div>


          <div className=' bg-gray-300 text-gray-700 rounded-full'>
            <p className='p-2 sm:p-3 text-sm sm:text-md'>Backend Developer</p>
          </div>
        </div>


         <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <img src={User1} alt='profile' className='w-12 h-12 sm:w-14 sm:h-14 rounded-full'/>
            <div className=''>
              <p className='text-md sm:text-lg text-gray-700 font-semibold dark:text-gray-200'>Alice Johnson</p>
              <p className='text-gray-600 text-sm sm:text-md dark:text-gray-300'>Australia</p>
            </div>
          </div>

          <div className=' bg-gray-200 text-gray-700  rounded-full'>
            <p className='p-2 sm:p-3 text-sm sm:text-md'>UI/UX Designer</p>
          </div>
        </div>


        </div>

        
      </div>
    </>
  )
}

export default Team