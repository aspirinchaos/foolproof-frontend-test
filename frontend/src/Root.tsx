import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import theme from 'core/services/theme';
import Router from 'core/layouts/Router';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<PropsWithChildren> = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
