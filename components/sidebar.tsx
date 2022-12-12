import '../styles/input.css';
import { BiChat } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import SideBarIcon from './sidebar_Icon';

export default function SideBar() {
  return (
        <div className="h-screen w-full
                        flex flex-col
                        bg-[#f3f3f3] text-white border-r-2 z-10">

            <SideBarIcon icon={<FiMail size="28"/>}text='Mail'/>
            <SideBarIcon icon={<BiChat size="28"/>}text='Chat'/>
            <SideBarIcon icon={<IoCalendarNumberOutline size="28"/>}text='Calendar'/>
        </div>);
}
