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

router.get('/contest/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tenetur.';

  res.send(contest);
});

export default router;
