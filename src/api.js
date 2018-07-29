import axios from 'axios';

export const fetchContest = contestId => (
  axios.get(`/api/contest/${contestId}`)
    .then(res => res.data)
);
