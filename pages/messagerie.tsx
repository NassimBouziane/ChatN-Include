import Collapse from '../components/collapse';
import Message from '../components/message';
import SideBar from '../components/sidebar';
import SideBar02 from '../components/sidebar_02';
import Page from '../app/test/page';
import '../styles/input.css';
import message from '../components/message';

export default function Messagerie() {
  return (
    <>
      {/** <div>
      <SideBar02/>
      <SideBar/>
      <Collapse/>
      <Page/>
    </div>
    <header className="flex bg-[#f3f3f3] justify-end z-0"><Collapse/></header> */}
      <div className='flex w-full h-full'>

        <div className="flex w-full h-full">
          <div className="w-40 h-full bg-green-500">
            <SideBar/>
          </div>
          
          <div className="flex justify-center w-full bg-gray-200 p-4">
            <div className="flex w-full h-[100%] resize-none">
              <Page />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
