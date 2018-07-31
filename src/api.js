import axios from 'axios';

export const fetchContest = contestId => (
  axios.get(`/api/contest/${contestId}`)
    .then(res => res.data)
);

export const fetchNames = nameIds => (
  axios.get(`/api/names/${nameIds.join(',')}`)
    .then(res => res.data.names)
);

export const fetchContestList = () => (
  axios.get('/api/contests')
    .then(res => res.data.contests)
);

export const addName = (newName, contestId) => {
  return axios.post('/api/names', { newName, contestId })
    .then(res => res.data);
};
