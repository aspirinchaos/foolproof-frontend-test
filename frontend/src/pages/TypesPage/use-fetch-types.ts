import { useState, useEffect } from 'react';

import { Type, fetchTypes } from 'core/api';

interface FetchTypes {
  loading: boolean;
  types: Type[];
}

export const useFetchTypes = (): FetchTypes => {
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    loading,
    types,
  };
};
