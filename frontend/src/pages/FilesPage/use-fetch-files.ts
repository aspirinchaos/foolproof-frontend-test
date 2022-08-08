import { useState, useEffect, ChangeEvent, useReducer } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { File, fetchFiles, FILE_TYPE } from 'core/api';

interface FilesState {
  files: File[];
  loading: boolean;
}

interface FetchFiles extends FilesState {
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

enum ACTION_KIND {
  callApi,
  success,
  error,
}

type Action = {
  type: ACTION_KIND,
  files?: File[];
  fileType?: FILE_TYPE;
}

const filesReducer = (state: FilesState, action: Action): FilesState => {
  switch (action.type) {
  case ACTION_KIND.callApi: {
    return {
      ...state,
      loading: true,
    };
  }
  case ACTION_KIND.success: {
    const allFiles = action?.files || [];
    const files = action.fileType ? allFiles.filter(f => f.type === action.fileType) : allFiles;

    return {
      ...state,
      loading: false,
      files,
    };
  }
  case ACTION_KIND.error: {
    toast.error('Something went wrong with API');
    return {
      ...state,
      loading: false,
      files: [],
    };
  }
  }
};


export const useFetchFiles = (): FetchFiles => {
  const { type } = useParams<{ type?: FILE_TYPE }>();
  const [state, dispatch] = useReducer(filesReducer, {
    loading: false,
    files: [],
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch({ type: ACTION_KIND.callApi });
    const fetchData = async () => {
      try {
        const data = await fetchFiles();
        dispatch({ type: ACTION_KIND.success, fileType: type, files: data });
      } catch (error) {
        dispatch({ type: ACTION_KIND.error });
      }
    };

    fetchData();
  }, [type]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const filteredFiles = state.files.filter(item => {
    return item.title.toLocaleLowerCase().search(search.toLocaleLowerCase()) > -1;
  });

  return {
    loading: state.loading,
    files: filteredFiles,
    search,
    handleSearch,
  };
};




