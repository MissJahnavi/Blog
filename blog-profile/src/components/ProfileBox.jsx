import React from 'react'
import { MdModeEditOutline } from "react-icons/md";

const ProfileBox = () => {
    return (
        <div>
            <div className='bg-white w-full flex items-center p-6 flex-wrap border-2 border-b-0 rounded-t-xl border-gray-300 shadow overflow-hidden'>
                <div className="flex items-center gap-4 w-full">
                    <div className="profile-logo">
                        <img src="https://i.pravatar.cc/100" alt="" className='w-16 h-16 rounded-full' />
                    </div>
                    <div className='flex-grow'>
                        <div className="font-semibold">Ann Silver</div>
                        <p className="text-gray-500">silverann@gmail.com</p>
                    </div>
                    <button className="text-gray-400 hover:text-black">
                        <MdModeEditOutline className='w-6 h-6 md:w-8 md:h-8' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileBox
