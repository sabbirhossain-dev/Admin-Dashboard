import React from 'react'

import profile from '../../../assets/user01.png'
import { TbTargetArrow } from "react-icons/tb";
import { IoMdStats } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Charts from './Charts'

const Profile = () => {
  return (
    <>
      <div className='bg-gray-200 dark:bg-gray-800 p-3 w-full lg:w-4/12 xl:3/12 rounded-md flex flex-col gap-5 mt-5 md:mt-0 md:mb-14'>

      <div className='p-3 text-gray-600 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-full'>
        <div className='flex gap-5'>
          <img src={profile} alt='profile' className='w-14 h-auto rounded-full'/>
          <div>
            <h2 className='text-xl font-medium'>Jhon Doe</h2>
            <p className='text-md text-gray-500 dark:text-gray-300'>Developer</p>
          </div>
        </div>
      </div>


      {/* shortcuts */}

      <div className='p-3 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 rounded-md'>
        <p className='text-xl font-medium tracking-wide pb-5'>Shortcuts</p>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <span className='bg-sky-100 dark:bg-gray-700 p-2 rounded-full dark:text-gray-200'><TbTargetArrow  /></span>
              <p>Goals</p>
            </div>
              <div className='bg-gray-300 dark:bg-gray-800 dark:text-gray-200 p-2 rounded-lg cursor-pointer'>
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <span className='bg-sky-100 dark:bg-gray-700 p-2 rounded-full dark:text-gray-200'><LiaClipboardListSolid  /></span>
              <p>Plans</p>
            </div>
            <div className='bg-gray-300 dark:bg-gray-800     dark:text-gray-200 p-2 rounded-lg cursor-pointer'>
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <span className='bg-sky-100 dark:bg-gray-700 p-2 rounded-full dark:text-gray-200'><IoMdStats  /></span>
              <p>Stats</p>
            </div>
              <div className='bg-gray-300 dark:bg-gray-800 dark:text-gray-200 p-2 rounded-lg cursor-pointer'>
                <IoIosArrowForward />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <span className='bg-sky-100 dark:bg-gray-700 p-2 rounded-full dark:text-gray-200'><IoIosSettings  /></span>
              <p>Settings</p>
            </div>
            <div className='bg-gray-300 dark:bg-gray-800 dark:text-gray-200 p-2 rounded-lg cursor-pointer'>
              <IoIosArrowForward  />
            </div>
          </div>
        </div>
        </div>

      </div>

      <Charts />

      </div>
    </>
  )
}

export default Profile