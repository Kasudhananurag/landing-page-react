import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-5xl sm:text-4xl text-xl font-bold py-2 '>Wants tricks and tips to optimise flow?</h1>
            <p className=''>
                Signup to our Newsletter and stay up to date
            </p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full ' >
                <input type="email" name="" id="" className=" w-[300px] h-[40px] rounded " />
                <button className='py-2 bg-[#54f255] w-[100px] my-2 text-black rounded-md mt-3 font-bold  ' >Notify me</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
