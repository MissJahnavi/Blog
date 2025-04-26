import React from 'react'
import { MdModeEditOutline } from "react-icons/md";

const Component1 = () => {
  return (
    <div className='main max-w-7xl mx-auto p-6 mt-7 rounded-b-lg flex flex-col lg:flex-row gap-6'>

      
      <div className="flex-1 space-y-6">
        
        
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

       
        {[
          {
            title: "Taste My Delightful Cookie",
            date: "Mar 10",
            time: "7 min read",
            tag: "Recipe",
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D",
            description: "lorem23"
          },
          {
            title: "Thrilling Grill",
            date: "Nov 15",
            time: "8 min read",
            tag: "Recipe",
            image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
            description: "lorem23"
          },
          {
            title: "Delicious Biryani",
            date: "Jul 10",
            time: "6 min read",
            tag: "Recipe",
            tag2: "Non-Veg",
            image: "https://media.istockphoto.com/id/1437118818/photo/biryani-with-salan-raita-and-pickle.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ayrkt_l2Ukw0A_kTM7QKEKm48fiYSMtvZBmjE11eTk=",
            description: "lorem23"
          },
          {
            title: "Juicy Fruits",
            date: "Apr 20",
            time: "7 min read",
            tag: "Health",
            image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0JTIwanVpY2V8ZW58MHx8MHx8fDA%3D",
            description: "lorem23"
          },
          {
            title: "Parotta",
            date: "Jan 2",
            time: "7 min read",
            tag: "Recipe",
            image: "https://media.istockphoto.com/id/2163457901/photo/lachha-paratha-served-in-dish-isolated-dark-background-top-view-of-indian-spices-bangladeshi.webp?a=1&b=1&s=612x612&w=0&k=20&c=D9e-QQEFFLUKyL8zdJeMCFZNRrEV-DKiszLPpdcBliA=",
            description: "lorem23"
          },
          {
            title: "Taste My Delightful Cookie",
            date: "Mar 12",
            time: "7 min read",
            tag: "Recipe",
            tag2: "Non-veg",
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llfGVufDB8fDB8fHww",
            description: "Description"
          },
        ].map((post, index) => (
          <div key={index} className='bg-white w-full flex flex-col sm:flex-row items-start sm:items-center p-6 gap-4 border border-gray-200 rounded-md shadow overflow-hidden'>
            
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
        ))}
      </div>

     
      <div className='bg-white p-6 w-full lg:w-[25vw] h-auto rounded-lg shadow-md'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-lg font-semibold'>Connections</h1>
          <a href="#" className="text-sm text-blue-500 hover:underline">See All →</a>
        </div>

        <ul className="space-y-4">
          {[
            "Kristin Watson",
            "Darlene Robertson",
            "Jenny Wilson",
            "Cameron Williamson",
            "Wade Warren"
          ].map((name, index) => (
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

    </div>
  );
};

export default Component1;
