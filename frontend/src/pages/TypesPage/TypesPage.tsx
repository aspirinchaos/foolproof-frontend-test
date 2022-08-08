import React from 'react';

import { Card, CardContent, Flex, Badge, Loading } from 'core/atoms';
import { useFetchTypes } from './use-fetch-types';
import TypesTable from './TypesTable';

const TypesPage: React.FC = () => {
  const { types, loading } = useFetchTypes();
  return (
    <Card>
      <CardContent pb={'0'}>
        <Flex justifyContent={'flex-end'}>
          <Badge>
            {loading ? 'loading...' : `${types.length} types`}
          </Badge>
        </Flex>

      </CardContent>
      <CardContent>
        {loading ? <Loading /> : <TypesTable types={types} />}
      </CardContent>
    </Card>
  );
};

export default TypesPage;
