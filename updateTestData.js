/* eslint no-underscore-dangle: 0 */
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(
  `${config.mongodbUri}/${config.mongodbName}`,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(null, err);
    const db = client.db(`${config.mongodbName}`);
    let contestCount = 0;
    db.collection('contests')
      .find({})
      .each((error, contest) => {
        assert.equal(null, error);
        if (!contest) {
          return;
        }

        contestCount += 1;
        db.collection('names')
          .find({ id: { $in: contest.nameIds } })
          .project({ _id: 1 })
          .toArray()
          .then((_ids) => {
            const newIds = _ids.map(o => o._id);
            db.collection('contests')
              .updateOne({ id: contest.id }, { $set: { nameIds: newIds } })
              .then(() => {
                console.info('Updated', contest._id);
                contestCount -= 1;
                if (contestCount === 0) {
                  client.close();
                }
              });
          })
          .catch(console.error);
      });
  },
);
