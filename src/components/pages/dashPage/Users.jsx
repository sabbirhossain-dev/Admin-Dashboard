import React from 'react'
import { FaUser, FaUserCheck } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'

const Users = () => {
  return (
    <>
        <div className='flex gap-6 sm:gap-6 md:gap-[23px] md:flex-col w-1/3 md:h-[370px]'>

        <div className=' flex gap-2 sm:gap-3 items-center p-[9px] sm:p-4 sm:pt-8 sm:pb-8 bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-md'>
          <div className='p-2 text-gray-600 bg-gray-200 pt-3 pb-3 rounded-md'>
            <FaUser />
          </div>
          <div>
            <h3 className='font-medium  text-md sm:text-lg md:text-xl'>200<span className='font-normal'>/250</span></h3>
            <p className='text-xs md:text-md font-semibold'>Total Empolyess</p>
          </div>

        </div>

        <div className=' flex gap-2 sm:gap-3 items-center p-[9px] sm:p-4 sm:pt-8 sm:pb-8 bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-md'>
          <div className='p-2 text-gray-600 bg-blue-200 pt-3 pb-3 rounded-md'>
            <FaEye />
          </div>
          <div>
            <h3 className='font-medium text-md sm:text-lg md:text-xl'>15<span className='font-normal'>/250</span></h3>
            <p className='text-xs md:text-md font-semibold'>On Leave</p>
          </div>

        </div>

          <div className=' flex gap-2 sm:gap-3 items-center p-[9px] sm:p-4 sm:pt-8 sm:pb-8  bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-md'>
          <div className='p-2 text-gray-600 bg-yellow-200 pt-3 pb-3 rounded-md'>
            <FaUserCheck />
          </div>
          <div>
            <h3 className='font-medium  text-md sm:text-lg md:text-xl'>25<span className='font-normal'>/250</span></h3>
            <p className='text-xs md:text-md font-semibold'>New Joinee</p>
          </div>

        </div>
        </div>
    </>
  )
}

export default Users