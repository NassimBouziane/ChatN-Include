import '../styles/input.css';
import { BiChat } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import SideBarIcon from './sidebar_Icon';

export default function SideBar() {
  return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                     bg-white text-white shadow-lg">

            <SideBarIcon icon={<FiMail size="28"/>}text='Mail'/>
            <SideBarIcon icon={<BiChat size="28"/>}text='Chat'/>
            <SideBarIcon icon={<IoCalendarNumberOutline size="28"/>}text='Calendar'/>

        </div>);
}
