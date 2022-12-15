import React from 'react';

export default function ReadOnlyRow({ user, handleEditClick, handleDeleteclick }) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.role_id}</td>
      <td>{user.group_id}</td>
      <td>
        <button type="button" className='boutton rounded-lg w-8 h-fit' onClick={(event) => handleEditClick(event, user)}>
          Edit
        </button>
        <button type="button" className='boutton rounded-lg w-14 h-fit' onClick={(event) => handleDeleteclick(event, user)}>Delete</button>
      </td>
    </tr>
  );
}

export function ReadEventOnlyRow({ Event, handleEditClick, handleDeleteclick }) {
  return (
    <tr>
      <td>{Event.title}</td>
      <td>{Event.start}</td>
      <td>{Event.end}</td>
      <td>{Event.color}</td>
      <td>{Event.content}</td>
      <td>{Event.created_by}</td>
      <td>{Event.belong_to}</td>
      <td>
        <button type="button" className='boutton rounded-lg w-8 h-fit' onClick={(event) => handleEditClick(event, Event)}>
          Edit
        </button>
        <button type="button" className='boutton rounded-lg w-14 h-fit' onClick={(event) => handleDeleteclick(event, Event)}>Delete</button>
      </td>
    </tr>
  );
}
