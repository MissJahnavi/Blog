import React from 'react'
import PostBox from './PostBox'

const posts=[
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
  ]


const PostList = () => {
    return (

        <div className='space-y-6'>
            {posts.map((post, index) => (
                <PostBox key={index} post={post} />
            ))}
        </div>

    )
}

export default PostList;
