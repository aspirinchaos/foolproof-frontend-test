import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import App from './App';
import UsersPage from 'pages/UsersPage';
import FilesPage from 'pages/FilesPage';
import TypesPage from 'pages/TypesPage';
import NotFoundPage from 'pages/NotFoundPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="users" replace />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="files">
          <Route index element={<FilesPage />} />
          <Route path=":type" element={<FilesPage />} />
        </Route>
        <Route path="types" element={<TypesPage />} />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
