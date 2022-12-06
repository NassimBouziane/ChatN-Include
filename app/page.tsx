import '../styles/output.css';
import LoginButton from '../compenant/loginButton';
import LoginPopup from '../compenant/loginPopup';
import { useState } from 'react';
import loginButton from '../compenant/loginButton';

export default function Page() {
  return (
    <div className='bg-gradient-to-r from-[#a371d0] to-[#ed25ddce] w-full h-screen grid grid-cols-2 gap-1 '>
      <div className='grid grid-rows-3 w-full h-full'>
        <div></div>
        <div className="text-white font-serif">          
          <p className='text-3xl ml-20 flex justify-center'><strong>CHAT'NCLUDE</strong></p>
          <p className='ml-20 flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='ml-20 flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='ml-20 flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className='ml-20 flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className='grid grid-rows-3 grid-cols-1 w-full h-full'>
      
      <div></div>
      <div></div>
      <div className='flex justify-center'><LoginButton/>
     </div>
      </div>
    </div>
  );
}
