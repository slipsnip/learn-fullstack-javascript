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

const getInitialData = (contestId, apiData) => {
  if (contestId) {
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData,
      },
    };
  }
  return { contests: apiData.contests };
}

const serverRender = async (contestId) => {
  const url = contestId
    ? `${config.serverUrl}/api/contests/${contestId}`
    : `${config.serverUrl}/api/contests`;
  const res = await axios.get(url);
  const initialData = getInitialData(contestId, res.data);
  return {
    initialMarkup: ReactDOMServer.renderToString(<App initialData={initialData} />),
    initialData,
  }
};

export default catchErrors(serverRender);
