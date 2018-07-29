import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb = null;
MongoClient.connect(`${config.mongodbUri}/${config.mongodbName}`,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(null, err);
    mdb = client.db(`${config.mongodbName}`);
  });

const router = express.Router();

router.get('/contests', (req, res) => {
  const contests = {};
  mdb.collection('contests').find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
    })
    .each((err, contest) => {
      assert.equal(null, err);
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest.id] = contest;
    });
});

router.get('/contest/:contestId', (req, res) => {
  mdb.collection('contests')
    .findOne({ id: Number(req.params.contestId) })
    .then(contest => res.send(contest))
    .catch(console.error);
});

export default router;
