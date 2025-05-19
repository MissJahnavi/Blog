//original unseparated code component 
import React from 'react'

const Component = () => {
  const baseStyles = "p-4 rounded-md border-l-4 shadow-sm my-2";

  const notifications = [
    { type: 'success', title: 'Success Message', description: 'Action completed successfully.' },
    { type: 'success', title: 'Success Message', description: 'Another success message here.' },
    { type: 'error', title: 'Error Message', description: 'An error occurred while performing the action.' },
    { type: 'warning', title: 'Warning Message', description: 'There might be an issue you need to check.' },
    { type: 'warning', title: 'Warning Message', description: 'Be cautious about this action.' },
    { type: 'error', title: 'Error Message', description: 'Another error description goes here.' },
  ];

  return (
    <div className='main m-16 flex flex-col lg:flex-row justify-center lg:justify-between p-4 lg:p-10 gap-6 bg-white min-h-screen'>
      <div className="component-1 w-full lg:w-[50%] bg-gray-50 p-6 rounded-xl shadow-xl border border-gray-200">
        <div className='text-2xl font-bold p-6 border-b-2  border-gray-400 w-full'>
          <h1>Notifications</h1>
        </div>
        <div className="flex flex-col gap-4">
          {notifications.map((note, index) => (
            <div key={index} className={`${baseStyles} ${note.type === "success" ? "bg-green-50 border-2 border-green-700 text-green-800" : note.type === "error" ? "bg-red-50 border-2  border-red-700 text-red-800" : note.type === "warning" ? "bg-yellow-50 border-2 border-yellow-700 text-yellow-800"
              : ""}  mb-6 `}>
              <h3 className='font-semibold'>{note.title}</h3>
              <p className='text-sm'>{note.description}</p>
              {note.type === "success" && <a href="#" className='text-xs underline mt-1 inline-block text-blue-900'>Learn more</a>}
            </div>

          ))}




        </div>

      </div>


      <div className="component-2 w-full lg:w-[30%] bg-gray-50 p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col">

        <div className="profile-logo flex items-center justify-between mb-4">
          <img src="https://i.pravatar.cc/100" alt="" className='w-16 h-16 rounded-full object-cover' />

        </div>


      </div>

    </div>


  )
}

export default Component
