import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledGlobal } from './styled';


ReactDOM.render(
  <React.StrictMode>
    <>
      <StyledGlobal />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
