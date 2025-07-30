import React from 'react'

import Chart from 'react-apexcharts'

 

const Charts = ({darkMode}) => {

    const options = {
  series: [44, 55, 41],
  options: {
    chart: {
      type: "donut",
      height: 300,
    },
    labels: ["Desktop", "Tablet", "Mobile"],
    colors: ["#FF5733", "#33FF57", "#3357FF"],
    legend: {
      position: "bottom",
      labels: {
        colors: darkMode ? "#dddddd" : "#6400c2",
      },
    },
    dataLabels: {
      style: {
        colors: ["#dddddd"],
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

  return (
    <div className='p-1 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 rounded-md'>
        <Chart type='donut' options={options.options} series={options.series} height={300}/>
    </div>
  )
}

export default Charts