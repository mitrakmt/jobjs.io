const express = require('express');
const app = express();
const rootRouter = require('./router/index');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const PORT = process.env.PORT || 2828;

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
console.log(path.join(__dirname, '../client'));
app.use('/', express.static(path.join(__dirname, '../client')));

app.use('/api', rootRouter);

app.listen(PORT);
