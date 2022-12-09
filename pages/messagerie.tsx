import Collapse from '../components/collapse';
import Message from '../components/message';
import SideBar from '../components/sidebar';
import SideBar02 from '../components/sidebar_02';

import '../styles/input.css';

export default function Messagerie() {
  return (<div><h1 className='text-center text-black font-serif text-4xl '>Messagerie</h1>
     <Message/><SideBar02/><SideBar/>
  
    

    <div></div>
<Collapse/>
</div>
  );
}
