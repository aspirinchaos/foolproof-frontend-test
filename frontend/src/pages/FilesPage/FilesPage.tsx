import React from 'react';

import { Card, CardContent, Input, Flex, Badge, Loading } from 'core/atoms';
import { useFetchFiles } from './use-fetch-files';
import FilesTable from './FilesTable';
import TypeFilter from './TypeFilter';

const FilesPage: React.FC = () => {
  const { files, loading, search, handleSearch } = useFetchFiles();
  return (
    <Card>
      <CardContent pb={'0'}>
        <Flex justifyContent={'space-between'}>
          <Input
            name={'search'}
            placeholder="Search files"
            maxWidth="300px"
            value={search}
            onChange={handleSearch}
          />
          <TypeFilter />
          <Badge>
            {loading ? 'loading...' : `${files.length} files`}
          </Badge>
        </Flex>

      </CardContent>
      <CardContent>
        {loading ? <Loading /> : <FilesTable files={files} />}
      </CardContent>
    </Card>
  );
};

export default FilesPage;
