import React from 'react';

export default function ReadOnlyRow({ user, handleEditClick }) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.role_id}</td>
      <td>{user.group_id}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, user)}>
          Edit
        </button>
      </td>
    </tr>
  );
}
