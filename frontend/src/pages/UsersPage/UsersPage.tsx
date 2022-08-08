import React from 'react';

import { Card, CardContent, Input, Flex, Badge, Loading } from 'core/atoms';
import { useFetchUsers } from './use-fetch-users';
import UsersTable from './UsersTable';

const UsersPage: React.FC = () => {
  const { users, loading, search, handleSearch } = useFetchUsers();
  return (
    <Card>
      <CardContent pb={'0'}>
        <Flex justifyContent={'space-between'}>
          <Input
            name={'search'}
            placeholder="Search users"
            maxWidth="300px"
            value={search}
            onChange={handleSearch}
          />
          <Badge>
            {loading ? 'loading...' : `${users.length} users`}
          </Badge>
        </Flex>

      </CardContent>
      <CardContent>
        {loading ? <Loading /> : <UsersTable users={users} />}
      </CardContent>
    </Card>
  );
};

export default UsersPage;
