import React from 'react';

export default function EditableRow({ editUser, handleEdituser, handleCancelClick }) {
  return (
    <tr>
      <td>
        <input type="text" placeholder="Enter a name" name="username" value={editUser.username} onChange={handleEdituser}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a email" name="email" value={editUser.email} onChange={handleEdituser}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a role" name="role_id" value={editUser.role_id} onChange={handleEdituser}></input>
      </td>
      <td>
        <input type="text" placeholder="Enter a group" name="group_id" value={editUser.group_id} onChange={handleEdituser}></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type='submit'onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
}
