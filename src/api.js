import axios from 'axios';

export const fetchContest = contestId => (
  axios.get(`/api/contest/${contestId}`)
    .then(res => res.data)
);

export const fetchContestList = () => (
  axios.get('/api/contests')
    .then(res => res.data.contests)
);
