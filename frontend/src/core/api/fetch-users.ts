import { toast } from 'react-toastify';

import { API_USERS } from './constants';

export interface User {
  id: number;
  givenName: string;
  familyName: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(API_USERS);
    return response.json();
  } catch (error) {
    toast.error('Something went wrong with API');
    return [];
  }
};
