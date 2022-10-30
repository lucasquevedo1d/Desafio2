import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './Theme/theme';
import Cadastro from "./Cadastro/Cadastro"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Cadastro />
    </ThemeProvider>
  </React.StrictMode>
);

