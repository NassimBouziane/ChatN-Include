import '../styles/output.css';
import Button01 from '../components/button_01';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='bg-white w-full h-screen grid grid-cols-2 gap-1 '>
      <div className='grid grid-rows-3 w-full h-full'>
        <div></div>
        <div className="text-[#A371D0] font-serif">          
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
      <div className='flex justify-center'><Button01 direction="../login" title="Connectez-vous"/>
     </div>
      </div>
    </div>
  );
}
