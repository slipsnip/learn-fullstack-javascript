import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb = null;
MongoClient.connect(
  `${config.mongodbUri}/${config.mongodbName}`,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(null, err);
    mdb = client.db(`${config.mongodbName}`);
  },
);

// High order function: handle bad requests
const catchBadRequest = promise => (req, res) => (
  promise.then(data => data)
    .catch((err) => {
      console.error(err);
      res.status(404).send('Bad Request!');
    })
);

// Find and modify contest, return modified
async function modifyContest(db, name, contestId) {
  const result = await db.collection('names').insertOne({ name });
  const document = await db
    .collection('contests')
    .findAndModify(
      { _id: contestId },
      [],
      { $push: { nameIds: result.insertedId } },
      { new: true },
    );
  return [document, result.insertedId];
}

const router = express.Router();

router.get('/contests', (req, res) => {
  const contests = {};
  mdb
    .collection('contests')
    .find({})
    .project({
      categoryName: 1,
      contestName: 1,
    })
    .each((err, contest) => {
      assert.equal(null, err);
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest._id] = contest;
    });
});

router.get('/names/:nameIds', (req, res) => {
  const names = {};
  const nameIds = req.params.nameIds.split(',').map(ObjectID);

  mdb
    .collection('names')
    .find({ _id: { $in: nameIds } })
    .each((err, name) => {
      assert.equal(null, err);
      if (!name) {
        res.send({ names });
        return;
      }
      names[name._id] = name;
    });
});

router.get('/contest/:contestId', (req, res) => {
  catchBadRequest(mdb
    .collection('contests')
    .findOne({ _id: ObjectID(req.params.contestId) })
    .then(contest => res.send(contest)));
});

router.post('/names', (req, res) => {
  const { newName: name } = req.body;
  const contestId = ObjectID(req.body.contestId);

  catchBadRequest(modifyContest(mdb, name, contestId)
    .then((doc, insertedId) => res.send({
      updatedContest: doc.value,
      newName: { _id: insertedId, name },
    })));
});

export default router;
