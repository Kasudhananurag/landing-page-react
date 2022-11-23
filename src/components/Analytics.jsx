import React from 'react';
import laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1260px] mx-auto grid md:grid-cols-2'>
        <img src={laptop} alt="" className='w-[500px] mx-auto my-4' />
        <div className=' flex flex-col justify-center'>
          <p className='text-[#54f255] font-bold'>
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p className=''>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime mollitia ducimus sapiente, hic magni quidem facilis dolorum vel eius illum impedit atque nostrum, ipsam omnis, eum ut odio vitae quae.
          </p>
          <button className='py-2 text-[#54f255] w-[200px] my-2 bg-black mx-auto rounded-md mt-3 font-bold  ' >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
