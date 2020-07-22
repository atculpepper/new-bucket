const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
// const cors = require("cors");

const passport = require('./strategies/user.strategy');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route includes
const userRouter = require('./routes/user.router');
const bucketRouter = require('./routes/bucket.router');
const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');
const imageRouter = require('./routes/image.router');

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/user', bucketRouter);
app.use('/api/imageurl', imageRouter);

//aws route
app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'annesbucket', // required
    region: 'us-east-2', // optional
    headers: { 'Access-Control-Allow-Origin': '*' }, // optional
    ACL: 'public-read', // this is the default - set to `public-read` to let anyone view uploads
  })
);

// app.use(cors());

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
