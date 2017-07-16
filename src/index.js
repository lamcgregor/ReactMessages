import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './containers/App/App';
import './index.css';

ReactDOM.render(
  <Provider store={store} className='main'>
    <App />
  </Provider>,
  document.getElementById('root')
);
