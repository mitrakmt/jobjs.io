const express = require('express');
const app = express();
const rootRouter = require('./router.js');
const logger = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 2828;

app.use('/', express.static(__dirname + '/client/build'));

app.use('/api', rootRouter);

app.listen(PORT);
