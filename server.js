const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const { urlencoded } = require('body-parser');

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

// app.use() middleware here ^ ///////////////////

app.use(cors());

app.use(express.static(`${__dirname}/client/build`))

app.use(bodyParser.json());

app.use(logger('dev'));

app.use(urlencoded({required: false}));

app.use('/', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));