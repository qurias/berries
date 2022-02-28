import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledGlobal } from './styled';
import { BrowserRouter as Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Route>
      <Provider store={store}>
        <StyledGlobal />
        <App />
      </Provider>
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);
