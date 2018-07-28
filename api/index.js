import express from 'express';
import data from '../src/testData.json';

const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  const newObj = { ...obj };
  newObj[contest.id] = contest;
  return newObj;
}, {});

router.get('/contests', (req, res) => {
  res.send({ contests });
});

export default router;
