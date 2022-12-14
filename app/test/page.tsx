'use client';

import '../../styles/App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import Chat from './chat';
import { getCookie } from 'typescript-cookie';
import { Tab } from '@headlessui/react'


const socket = io.connect('http://localhost:3001');
function index() {
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();
  const [showChat, setShowChat] = useState(false);
  const [adminChat, setAdminChat] = useState(false);
  const [chatRooms, setChatRooms] = useState(null);

  async function joinRoom(username,room,role){
    if (username !== '' && room !== '' && role === 1) {
      socket.emit('join_room', room);
      setShowChat(true)
      
    }
    else if(username !== '' && room !== '' && role === 2){
      console.log('test');
      socket.emit('join_room', room);
      setShowChat(false);
    }
  }
  useEffect(() => { 
      const NbRoom = fetch('http://localhost:3000/api/groups',{method:'GET'}).then((res) => res.json()).then((data) => setChatRooms(data))
      const res = fetch(`http://localhost:3000/api/users/${getCookie('id')}`).then((response) => response.json())
    .then((data) => {setRoom(data.group_id),setUsername(data.username),joinRoom(data.username,data.group_id,data.role_id)})
  }, []);
  return (
    <div className="App">
      {!showChat ? (
        <div> {chatRooms && chatRooms.map((rooms) => <div> <button onClick={() => joinRoom(username,rooms.name, 2)} className='group'>{rooms.name}<div className='hidden group-focus:flex'>< Chat socket={socket} username={username} room={rooms.name}/></div></button> </div>
      )} </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default index;
