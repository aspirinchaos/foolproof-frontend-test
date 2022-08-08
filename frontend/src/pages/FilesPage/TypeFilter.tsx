import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { FILE_TYPE } from 'core/api';
import { Button } from 'core/atoms';
import { useFetchTypes } from '../TypesPage/use-fetch-types';

const TypeFilter: React.FC = () => {
  const { types } = useFetchTypes();
  const { type: fileType } = useParams<{ type?: FILE_TYPE }>();
  const navigate = useNavigate();

  const onClick = (newType: FILE_TYPE) => {
    if (newType === fileType) {
      return navigate('/files');
    }
    return navigate(`/files/${newType}`);
  };

  return (
    <Group>
      {types.map(type => (
        <Button
          key={type.id}
          active={type.id === fileType}
          onClick={() => onClick(type.id)}
        >
          {type.name}
        </Button>
      ))}
    </Group>
  );
};

export default TypeFilter;

const Group = styled.div`
  ${Button} {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 0.65rem;
      border-bottom-left-radius: 0.65rem;
    }

    &:last-child {
      border-top-right-radius: 0.65rem;
      border-bottom-right-radius: 0.65rem;
    }
  }
`;
