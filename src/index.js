import React from 'react';
import ReactDOM from 'react-dom';
import { createPopper } from '@popperjs/core'; // eslint-disable-line
import bootstrap from 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line
import { Tooltip, Toast, Popover } from 'bootstrap';
// import Counters from './Counters';
// import Counter from './Counter'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);