'use client';

import '../styles/App.css';
import { useEffect, useState, useRef } from 'react';
import { Getuser } from '../interfaces';

export default function UserPost() {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const roleid = useRef(null);
  const groupid = useRef(null);

  async function getData() {
    console.log('je suis la');
    const adduser = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        role_id: roleid.current.value,
        group_id: groupid.current.value,
      }),
    }).then((res) => {
      res.json();
      console.log(adduser, 'test1');
    });
  }

  console.log(username, 'test2');

  const [user, setUser] = useState(null);
  useEffect(() => {
    const res = fetch('http://localhost:3000/api/users/')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div className="app-container">
      <h5>Add a User </h5>
      <form onSubmit={getData}>
        <input
          ref={username}
          type="text"
          name="username"
          placeholder="Enter a name"
          className="mt-1 flex px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="Enter an email"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          ref={password}
          type="password"
          name="Password"
          placeholder="Enter a password"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          ref={roleid}
          type="number"
          name="role_id"
          placeholder="Enter a role"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          ref={groupid}
          type="text"
          name="group_id"
          placeholder="Enter a group"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#FD9262] via-[#e31988] to-[#A371D0] flex text-center rounded-full  w-3/9 h-fit px-[24px] py-[12px] hover:from-[#fd9362af] hover:via-[#fc1ba6b0] hover:to-[#a471d0bc] hover:brightness-75 text-[16px] font-sans text-white justify-center"
        >
          Add
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>password</th>
            <th>role_id</th>
            <th>group_id</th>
          </tr>
        </thead>
        <tbody>
          {user
            && user.map((user: Getuser, i: number) => (
              <>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.role_id}</td>
                  <td>{user.group_id}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}
