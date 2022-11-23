import React from 'react';
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4  bg-white' >
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ' >
                <div className="w-full shadow p-10 rounded hover:scale-110 duration-300 text-center">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p>INR 1200</p>
                    <div>
                        <p className='mt-2 border-b'>500 GB storage</p>
                        <p className='mt-2 border-b'>1 Garanted User </p>
                        <p className='mt-2 border-b'>Send upto 2 Gb</p>
                    </div>
                    <button className='mt-2 bg-[lightgreen] p-3 rounded font-bold hover:bg-[green] hover:text-white' >Start Trial</button>
                </div>
                <div className="w-full shadow p-10 rounded hover:scale-110 duration-300 text-center">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p>INR 1800</p>
                    <div>
                        <p className='mt-2 border-b'>700 GB storage</p>
                        <p className='mt-2 border-b'>2 Garanted User </p>
                        <p className='mt-2 border-b'>Send upto 4 Gb</p>
                    </div>
                    <button className='mt-2 bg-[lightgreen] p-3 rounded font-bold hover:bg-[green] hover:text-white' >Start Trial</button>
                </div>
                <div className="w-full shadow p-10 rounded hover:scale-110 duration-300 text-center">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p>INR 2500</p>
                    <div>
                        <p className='mt-2 border-b'>1500 GB storage</p>
                        <p className='mt-2 border-b'>3 Garanted User </p>
                        <p className='mt-2 border-b'>Send upto 8 Gb</p>
                    </div>
                    <button className='mt-2 bg-[lightgreen] p-3 rounded font-bold hover:bg-[green] hover:text-white' >Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
