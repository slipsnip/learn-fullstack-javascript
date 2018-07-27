import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import App from './src/components/App';

function catchErrors(fn) {
  return function catchIt() {
    return fn().catch(err => console.error(err));
  };
}

const serverRender = async () => {
  const res = await axios.get(`${config.serverUrl}/api/contests`);
  return ReactDOMServer.renderToString(<App initialContests={res.data.contests} />);
};

export default catchErrors(serverRender);
