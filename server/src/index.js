const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./router');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(router); // since index is on the json, this line is to call all the routes in the router.js file.

app.listen(8000);


