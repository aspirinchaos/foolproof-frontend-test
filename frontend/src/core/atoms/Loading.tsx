import React from 'react';

import { Flex, Spinner } from '.';

const Loading: React.FC = () => {
  return (
    <Flex m={'1rem'} justifyContent={'center'}>
      <Spinner />
    </Flex>
  );
};

export default Loading;
