import { toast } from 'react-toastify';

import { API_FILES } from './constants';
import { fetchUsers, User } from './fetch-users';
import { FILE_TYPE, Type, fetchTypes } from './fetch-types';

enum FILE_STATUS {
  inProgress = 'In progress',
  published = 'Published',
  forReview = 'For review',
  approved = 'Approved',
}

export interface ApiFile {
  creationDateTime: string;
  status: FILE_STATUS;
  modifiedBy: number;
  type: FILE_TYPE;
  uri: string;
  version: number;
  id: number;
  fileId: string;
  scheduled: boolean;
  title: string;
  createdBy: number;
  modifiedDateTime: string;
  live: boolean;
  popularity: number;
}

export interface File extends ApiFile {
  modifiedByUser?: User;
  createdByUser?: User;
  typeType?: Type;
}

const fetchApiFiles = async (): Promise<ApiFile[]> => {
  const response = await fetch(API_FILES);
  return response.json();
};

export const fetchFiles = async (): Promise<File[]> => {
  try {
    const [files, users, types] = await Promise.all([
      fetchApiFiles(),
      fetchUsers(),
      fetchTypes(),
    ]);

    return files.map((file) => {
      const createdByUser = users.find(u => u.id === file.createdBy);
      const modifiedByUser = users.find(u => u.id === file.modifiedBy);
      const typeType = types.find(t => t.id === file.type);
      return {
        ...file,
        createdByUser,
        modifiedByUser,
        typeType,
      };
    });
  } catch (error) {
    toast.error('Something went wrong with API');
    return [];
  }
};
