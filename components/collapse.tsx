import { BiChevronDown } from 'react-icons/bi';
import '../styles/input.css';
import DropButton from './dropbutton';

export default function Selector() {
  return (<div className='ml-[85%] w-44 h-screen font-medium '>
  <button className="bg-white w-full p-1 flex items-center justify-center rounded-full  group"><BiChevronDown size={20}/>
  <div className='ml-6 text-[#A371D0]'><DropButton text='Nassim'/></div>
  <img
            src="https://cdna.artstation.com/p/assets/images/images/044/872/734/large/rodion-vlasov-fin1-1.jpg?1641375316"
            className="flex ml-10 object-cover h-8 w-8 rounded-full "
            alt=""
          />
  <ul className='absolute hidden group-focus:block top-[3.5%] w-44 bg-white text-[#A371D0] shadow-md mt-1 -ml-1 rounded'>
    <li className='p-2 text-sm hover:bg-[#f3f3f3] hover:text-[#A371D0] rounded'> <DropButton text='Dark Mode'/></li>
    <li className='p-2 text-sm hover:bg-[#f3f3f3] hover:text-[#A371D0]'><DropButton text='Setting'/></li>
    <li className='p-2 text-sm hover:bg-[#f3f3f3] hover:text-[#A371D0]'><DropButton text='Log Out'/></li>
  </ul>
  </button>
  </div>
  );
}
