import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () =>{
        setNav(!nav);
    }
    return (
        <div className='text-white flex justify-between item-center h-24 max-w-[1240px] px-4 mx-auto '>
            <h1 className='w-full text-3xl font-bold text-[#dfe4d9]'>React</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div className='my-3 block md:hidden' onClick={handleNav}>
                {
                    !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />
                }
                
            </div>
            <div className={!nav? "fixed left-0 top-0 text-center w-[60%] border-r h-full bg-gray-800 border-r-gray-900 ease-in-out duration-500":"hidden"}>
            <h1 className='w-full text-3xl font-bold text-[#dfe4d9] m-4'>React</h1>
                <ul className='p-4 mt-7 text-center uppercase'>
                    <li className='p-4 border-b border-gray-100'>Home</li>
                    <li className='p-4 border-b border-gray-100'>Company</li>
                    <li className='p-4 border-b border-gray-100'>Resources</li>
                    <li className='p-4 border-b border-gray-100'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
