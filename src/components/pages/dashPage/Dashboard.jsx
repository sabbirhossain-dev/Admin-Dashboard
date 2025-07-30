import React from 'react'
import Navbar from '../nav/Navbar'

import Profile from './Profile'
import BalanceChart from './BalanceChart'
import Users from './Users'
import Team from './Team'
import Events from './Events'

const Dashboard = () => {
  return (
    <>
      <section className='p-4 bg-gray-100 dark:bg-gray-900 w-full h-auto flex flex-col lg:flex-row justify-between gap-5'>

      <div className='flex flex-col w-full'>
        <div className='flex flex-col md:flex-row md:justify-between gap-5'>
          <Users />
          <BalanceChart />
        </div>
        <div className='flex flex-col pt-5 xl:flex-row gap-5 justify-between'>
              <Team />
              <Events />

        </div>
      </div>
      <Profile />



      </section>
    </>
  )
}

export default Dashboard