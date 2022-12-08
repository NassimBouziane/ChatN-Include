import Message from "../components/message";
import SideBar from '../components/sidebar';
import SideBarIcon from '../components/sidebar_Icon';

import '../styles/input.css';

export default function Messagerie() {
  return (<div > <SideBar/>
    <h1 className='text-center text-black font-serif text-4xl '>Messagerie</h1>
    <div> <Message/></div>

</div>
  );
}
