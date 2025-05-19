import React from 'react'

const names=[
    "Kristin Watson",
    "Darlene Robertson",
    "Jenny Wilson",
    "Cameron Williamson",
    "Wade Warren"
  ]

const Connection = () => {
  return (

      <div className='bg-white p-6 w-full lg:w-[25vw] h-auto rounded-lg shadow-md'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-lg font-semibold'>Connections</h1>
          <a href="#" className="text-sm text-blue-500 hover:underline">See All →</a>
        </div>

        <ul className="space-y-4">
          {names.map((name, index) => (
            <li key={index} className='flex items-center gap-3'>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className='text-sm font-medium'>
                <p>{name}</p>
                <p className="text-xs text-gray-400">{name.split(" ")[0].toLowerCase()}_{index + 1}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    
  )
}

export default Connection;
