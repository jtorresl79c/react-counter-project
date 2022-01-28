import React from 'react';
import ReactDOM from 'react-dom';
import { createPopper } from '@popperjs/core'; // eslint-disable-line
import bootstrap from 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line
import Counters from './Counters';
// import Counter from './Counter'

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);