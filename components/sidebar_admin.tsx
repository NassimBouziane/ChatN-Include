// import SideBarIcon from './sidebar_Icon';
import '../styles/input.css';
import React from 'react';
import { Tab } from '@headlessui/react';
import UserPost from '../serviceAdmin/userservices';
import EventPost from '../serviceAdmin/eventservice';

export default function MyTabs() {
  return (
    <div>
    <Tab.Group>
      <Tab.List className="fixed top-0 left-0 h-screen w-28
                        flex flex-col gap-3
                        bg-[#f3f3f3] text-black shadow-xl">
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0] ">User</Tab>
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0] ">Events</Tab>
        <Tab className="w-full h-12 focus:bg-[#ADB6FA] focus:border-l-4 focus:border-[#A371D0]">Groups</Tab>
      </Tab.List>
      <Tab.Panels className=" ml-[10%] font-xl">
        <Tab.Panel><UserPost/></Tab.Panel>
        <Tab.Panel><EventPost/></Tab.Panel>
        <Tab.Panel><UserPost/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
}
