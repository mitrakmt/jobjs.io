const express = require('express');
const app = express();
const rootRouter = require('./router/index');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 2828;

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.use('/', express.static(__dirname + '/client'));

app.use('/api', rootRouter);

app.listen(PORT);
