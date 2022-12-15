'use client';

import '../styles/App.css';
import { useEffect, useState, Fragment } from 'react';
import { Getuser } from '../interfaces';
import ReadOnlyRow from './components/ReadOnlyRow';
import { EditableRow } from './components/EditableRow';

export default function UserPost() {
  /* ADD User */
  const [addUser, setAddUser] = useState({
    username: '',
    email: '',
    password: '',
    role_id: Number,
    group_id: '',
  });

  /* Add user management */
  const handleAdduser = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newUser = { ...addUser };
    newUser[fieldName] = fieldValue;

    setAddUser(newUser);
  };

  /* A function that is called when the user clicks the submit button on the add user form. */
  const handleAddusersubmit = async (event) => {
    event.preventDefault();
    const user = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify(addUser),
    });
    window.location.reload();
  };

  /* This is a hook that is fetching the user from the database. */
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const res = fetch('http://localhost:3000/api/users/')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const [edituserid, setEdituserid] = useState<Number>(null);

  const [editUser, setEditUser] = useState({
    username: '',
    email: '',
    role_id: Number,
    group_id: '',
  });

  const handleEdituser = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newdata = { ...editUser };
    newdata[fieldName] = fieldValue;

    setEditUser(newdata);
  };

  const handleEditClick = (event, user: Getuser) => {
    event.preventDefault();
    setEdituserid(user.id);

    const formValues = {
      username: user.username,
      email: user.email,
      role_id: user.role_id,
      group_id: user.group_id,
    };
    setEditUser(formValues);
  };

  const handleEditsubmit = async (event) => {
    event.preventDefault();
    const user = await fetch(`/api/users/${edituserid}`, {
      method: 'PUT',
      body: JSON.stringify({
        username: editUser.username,
        email: editUser.email,
        role_id: editUser.role_id,
        group_id: editUser.group_id,
      }),
    });
    window.location.reload();
  };

  const handleCancelClick = () => {
    setEdituserid(null);
  };

  const handleDeleteclick = async (event, user: Getuser) => {
    event.preventDefault();
    console.log(user.id);

    const User = await fetch(`/api/users/${user.id}`, {
      method: 'DELETE',
    });
  };

  return (
    <div className="app-container">
      <h5>Add a User </h5>
      <form onSubmit={handleAddusersubmit}>
        <input
          onChange={handleAdduser}
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
          onChange={handleAdduser}
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
          onChange={handleAdduser}
          type="password"
          name="password"
          placeholder="Enter a password"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAdduser}
          type="text"
          name="role_id"
          placeholder="Enter a role"
          className="mt-1 flex justify-center  px-3 py-2 bg-white border border-slate-300text-sm shadow-sm placeholder-slate-400
                          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
        ></input>
        <input
          onChange={handleAdduser}
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
      <form onSubmit={handleEditsubmit}>
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>email</th>
              <th>role_id</th>
              <th>group_id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              && users.map((user: Getuser, i: any) => (
                <>
                  <Fragment>
                    {edituserid === user.id ? (
                      <EditableRow
                        editUser={editUser}
                        handleEdituser={handleEdituser}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        user={user}
                        handleEditClick={handleEditClick}
                        handleDeleteclick={handleDeleteclick}
                      />
                    )}
                  </Fragment>
                </>
              ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
