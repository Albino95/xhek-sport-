import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({ socialImg, name }) => {
  if (!socialImg) {
    console.error('socialImg is undefined');
    return null;  // You can return a placeholder or fallback image here
  }

  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='Instagram Image'
        className='w-full h-full'
        layout='responsive'
        width={405} 
        height={500}
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
        <p className='text-gray-300 hidden group-hover:block'>
          <FaInstagram size={30} className='z-10' />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
