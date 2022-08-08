import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Type } from 'core/api';
import { Table, TypeIcon } from 'core/atoms';
import formatISODate from 'core/services/format-iso-date';
import TypeColourIcon from './TypeColourIcon';

interface TypesTableProps {
  types: Type[];
}

const TypesTable: React.FC<TypesTableProps> = ({ types }) => {
  const navigate = useNavigate();

  if (!types.length) {
    return <h2>Types not found</h2>;
  }

  const onClick = (type: string) => {
    navigate(`/files/${type}`);
  };

  return (
    <Table hovered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Created at</th>
          <th>Documents</th>
        </tr>
      </thead>
      <tbody>
        {types.map((type) => (
          <tr key={type.id} onClick={() => onClick(type.id)}>
            <td>
              <TypeColourIcon colour={type.colourId}>
                <TypeIcon />
                {type.name}
              </TypeColourIcon>
            </td>
            <td>{type.description}</td>
            <td className="grey">{formatISODate(type.creationDateTime)}</td>
            <td className="grey">{type.documentsCount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TypesTable;
