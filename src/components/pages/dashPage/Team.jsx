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
          <div className='flex gap-3'>
            <img src={User1} alt='profile' className='w-14 rounded-full'/>
            <div className=''>
              <p className='text-lg text-gray-700 font-semibold dark:text-gray-200'>Robert Fox</p>
              <p className='text-gray-600 text-md dark:text-gray-300'>USA</p>
            </div>
          </div>
          <div className=' bg-yellow-200 dark:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-full'>
            <p className='p-3'>Python Developer</p>
          </div>
        </div>


         <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <img src={User2} alt='profile' className='w-14 rounded-full'/>
            <div className=''>
              <p className='text-lg text-gray-700 font-semibold dark:text-gray-200'>Jane Doe</p>
              <p className='text-gray-600 text-md dark:text-gray-300'>UK</p>
            </div>
          </div>

          <div className=' bg-sky-200 dark:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-full'>
            <p className='p-3'>Frontend Developer</p>
          </div>
        </div>


         <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <img src={User3} alt='profile' className='w-14 rounded-full'/>
            <div className=''>
              <p
               className='text-lg text-gray-700 font-semibold dark:text-gray-200'>John Smith</p>
              <p className='text-gray-600 text-md dark:text-gray-300'>Canada</p>
            </div>
          </div>


          <div className=' bg-gray-300 dark:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-full'>
            <p className='p-3'>Backend Developer</p>
          </div>
        </div>


         <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <img src={User1} alt='profile' className='w-14 rounded-full'/>
            <div className=''>
              <p className='text-lg text-gray-700 font-semibold dark:text-gray-200'>Alice Johnson</p>
              <p className='text-gray-600 text-md dark:text-gray-300'>Australia</p>
            </div>
          </div>

          <div className=' bg-gray-200 dark:bg-gray-500 text-gray-700 dark:text-gray-200 rounded-full'>
            <p className='p-3'>Full-Stack Developer</p>
          </div>
        </div>


        </div>

        
      </div>
    </>
  )
}

export default Team