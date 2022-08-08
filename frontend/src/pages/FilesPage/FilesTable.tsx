import React from 'react';

import { File, User } from 'core/api';
import { FileIcon, Table } from 'core/atoms';
import FileColorIcon from './FileColorIcon';

interface FilesTableProps {
  files: File[];
}

const userName = (user?: User) => user ? `${user.familyName} ${user.givenName}` : 'not found';

const FilesTable: React.FC<FilesTableProps> = ({ files }) => {
  if (!files.length) {
    return <h2>Files not found</h2>;
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>created by</th>
          <th>modified by</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file) => (
          <tr key={file.id}>
            <td>
              <FileColorIcon>
                <FileIcon />
                {file.title}
              </FileColorIcon>
            </td>
            <td className="grey">{file.typeType?.name || ''}</td>
            <td className="grey">{userName(file.createdByUser)}</td>
            <td className="grey">{userName(file.modifiedByUser)}</td>
            <td className="grey">{file.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FilesTable;
