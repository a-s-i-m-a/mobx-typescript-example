import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper } from '@unione-pro/unione.commons.webpack';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Wrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Wrapper>
  </React.StrictMode>,
);
