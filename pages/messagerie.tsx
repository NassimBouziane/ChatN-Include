import Collapse from '../components/collapse';
import Message from '../components/message';
import SideBar from '../components/sidebar';
import SideBar02 from '../components/sidebar_02';
import Page from '../app/test/page';
import '../styles/input.css';
import message from '../components/message';

export default function Messagerie() {
  return (
    <div>      
      <SideBar02/>
      <SideBar/>
      <Collapse/>
      <Page/>
    </div>
  );
}
