import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';

axios
  .get('/api/contests')
  .then((res) => {
    ReactDOM.hydrate(<App initialContests={res.data.contests} />, document.getElementById('root'));
  })
  .catch(console.error);
