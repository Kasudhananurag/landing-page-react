import React from 'react';
import {
    FaDribbble,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter
} from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <div className='max-w-[1240px] mx-auto py-16 px-3  grid lg:grid-cols-3 gap-8  text-gray-500'>
                <h1 className='w-full text-3xl font-bold text-[#dfe4d9]'>React</h1>
                <p className='PY-4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime mollitia ducimus sapiente, hic magni quidem facilis dolorum vel eius illum impedit atque nostrum, ipsam omnis, eum ut odio vitae quae.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaDribbble className='mt-2' size={30} />
                    <FaFacebook className='mt-2' size={30} />
                    <FaGithub className='mt-2' size={30} />
                    <FaInstagram className='mt-2' size={30} />
                    <FaTwitter className='mt-2' size={30} />
                </div>
            </div>
            <div className='w-full pb-4 text-center text-[gray]'>
                <small>mady by Anurag Kasudhan</small>
            </div>
        </>
    )
}

export default Footer
