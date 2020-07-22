const express = require('express');
const pool = require('../modules/pool');
// app.use(express.bodyParser());
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/photoexperience/:userID', rejectUnauthenticated, (req, res) => {
  console.log(
    'this is what the server is getting:',
    req.query.userID,
    req.query.experienceID
  );
  console.log(req.query);
  // res.header("Access-Control-Allow-Origin", "*");
  const userID = req.query.userID;
  const queryText = `SELECT "user_photos_experiences".experience_id, "user_photos_experiences".photo_id, "photos".experience_photo, "user_photos_experiences".user_id
  FROM "user_photos_experiences"
   JOIN "photos" ON "user_photos_experiences".photo_id = "photos".id WHERE "user_photos_experiences".user_id = $1;`;
  pool
    .query(queryText, [userID])
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch((err) => {
      console.log('error getting photos from photoexperience:', err);
      res.sendStatus(500);
    });
});

/**
 * PUT route
 */

router.post('/:userID', rejectUnauthenticated, (req, res) => {
  let imgURL = req.body.imgURL;
  let experienceID = req.body.experienceID;
  console.log('experienceID is:', experienceID);

  let queryText = `INSERT INTO "photos" ("experience_photo") VALUES ($1) RETURNING id;`;

  pool
    .query(queryText, [imgURL])
    .then((responseDB) => {
      const photoID = responseDB.rows[0].id;

      pool
        .query(
          `UPDATE "user_photos_experiences" SET "photo_id" = $1 WHERE "experience_id" = $2;`,
          [photoID, experienceID]
        )
        .then((responseDB) => {
          const dbRows = responseDB.rows;
          console.table(dbRows);
          res.send(dbRows);
        })
        .catch((err) => {
          console.log('err inserting to photos', err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log('err inserting to user_photos_experiences', err);
      res.sendStatus(500);
    });
});

module.exports = router;
