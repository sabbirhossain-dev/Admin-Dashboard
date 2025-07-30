import React from 'react'

const Events = () => {
  return (
    <div className='w-full xl:w-1/2 bg-white      dark:bg-gray-800 p-4 rounded-md pb-5'>
        <p className='text-xl font-semibold text-gray-700 dark:text-gray-200 mb-5'>Events</p>

        <div className='flex flex-col gap-10'>

            <div className='flex gap-5 items-center'>
            <div className='bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-2 pl-4 pr-4 rounded-md text-center font-semibold'>
                <p>01</p>
                <span>Aug</span>
            </div>

            <div>
                <p className='text-xl font-semibold text-gray-500 dark:text-gray-300'>Upcoming Event</p>
                <span className='text-gray-400 text-lg dark:text-gray-400'>Upcoming event held on 01 Aug</span>
            </div>
        </div>

        <div className='flex gap-5 items-center'>
            <div className='bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-2 pl-4 pr-4 rounded-md text-center font-semibold'>
                <p>15</p>
                <span>Sep</span>
            </div>

            <div>
                <p className='text-xl font-semibold text-gray-500 dark:text-gray-300'>Annual Conference</p>
                <span className='text-gray-400 text-lg dark:text-gray-400'>Join us for our annual conference</span>
            </div>
        </div>

        <div className='flex gap-5 items-center'>
            <div className='bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-2 pl-4 pr-4 rounded-md text-center font-semibold'>
                <p>20</p>
                <span>Sep</span>
            </div>

            <div>
                <p className='text-xl font-semibold text-gray-500 dark:text-gray-300'>Networking Meetup</p>
                <span className='text-gray-400 text-lg dark:text-gray-400'>Connected with professionals in your field</span>
            </div>
        </div>
        </div>


    </div>
  )
}

export default Events