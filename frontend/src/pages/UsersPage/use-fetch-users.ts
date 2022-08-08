import { useState, useEffect, ChangeEvent } from 'react';

import { User, fetchUsers } from 'core/api';

interface FetchUsers {
  loading: boolean;
  users: User[];
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useFetchUsers = (): FetchUsers => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const filteredUsers = users.filter(item => {
    return item.familyName.toLocaleLowerCase().search(search.toLocaleLowerCase()) > -1 ||
      item.givenName.toLocaleLowerCase().search(search.toLocaleLowerCase()) > -1;
  });

  return {
    loading,
    users: filteredUsers,
    search,
    handleSearch,
  };
};
