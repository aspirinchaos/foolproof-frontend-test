import { toast } from 'react-toastify';
import { COLOURS } from 'styled-components';

import { API_TYPES } from './constants';

export enum FILE_TYPE {
  profile = 'profile',
  article = 'article',
}

export interface Type {
  id: FILE_TYPE;
  creationDateTime: string;
  documentsCount: number;
  description: string;
  name: string;
  colourId: COLOURS;
}

export const fetchTypes = async (): Promise<Type[]> => {
  try {
    const response = await fetch(API_TYPES);
    return response.json();
  } catch (error) {
    toast.error('Something went wrong with API');
    return [];
  }
};
