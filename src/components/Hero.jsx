import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
   
      <div className="text-white">
        <div className="max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className=' text-[#51ea51] font-bold' >GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-6 '>GROW WITH DATA.</h1>
            <div>
                <p className='md:text-3xl sm:text-4xl text-xl py-3 font-bold'>
                    Fast, flexible financing for  &nbsp;
                <Typed className='text-[gray]'
                  strings ={['BTB','BTC','SASS']}
                  typeSpeed={120}
                  backSpeed={100}
                  loop
                />
                 </p>
            </div>
            <p className='text-[gray] font-bold' >Monitor your data analytics to increase your revenue from  BTB, BTC & SASS platforms</p>
            <button className='py-2 bg-[#54f255] w-[200px] text-black mx-auto rounded-md mt-3 font-bold  ' >Get Started</button>
        </div>   
      </div>
   
  )
}

export default Hero;
