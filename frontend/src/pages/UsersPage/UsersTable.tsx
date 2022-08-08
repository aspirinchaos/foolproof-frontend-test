import React from 'react';

import { User } from 'core/api';
import { Table } from 'core/atoms';

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  if (!users.length) {
    return <h2>Users not found</h2>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Given Name</th>
          <th>Family name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="grey">{user.id}</td>
            <td>{user.givenName}</td>
            <td>{user.familyName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
