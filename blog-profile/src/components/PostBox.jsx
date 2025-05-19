import React from 'react'

const PostBox = ({ post }) => {
  return (
    <div>
      <div  className='bg-white w-full flex flex-col sm:flex-row items-start sm:items-center p-6 gap-4 border border-gray-200 rounded-md shadow overflow-hidden'>
            
            <img src={post.image} alt="post" className='w-full sm:w-40 h-24 object-cover rounded' />
          
          <div className='flex flex-col justify-between w-full'>
            <div>
              <p className='text-sm text-gray-600 mb-1'>
                <span className='pr-4 border-r border-gray-300'>{post.date}</span>
                <span className='pl-2'>{post.time}</span>
              </p>
              <h3 className='font-bold text-xl'>{post.title}</h3>
              <p className='text-sm mt-1'>{post.description}</p>
            </div>
            <div className='mt-2 space-x-2'>
              <button className='text-xs bg-gray-100 px-2 py-1 rounded'>{post.tag}</button>
              {post.tag2 && <button className='text-xs bg-gray-100 px-2 py-1 rounded'>{post.tag2}</button>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default PostBox
