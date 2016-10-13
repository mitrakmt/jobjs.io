const express = require('express');
const Middleware = express.Router()
const request = require("request");
const _ = require('lodash');

Middleware.getAllJobs = (req, res, next) => {

  var options = {
    method: 'GET',
    url: 'https://jobs.github.com/positions.json',
    qs: {
      description: 'javascript'
    },
    headers: {
       'cache-control': 'no-cache',
       'content-type': 'application/json'
    },
    json: true
  };

  request(options, function (error, res, body) {
    if (error) throw new Error(error);

    req.body.jobs = body;
    next();
  });
}

Middleware.getJob = (req, res, next) => {
  let options = {
    // this needs filled out
  };

  request(options, function (error, res, body) {
    if (error) throw new Error(error);

    req.body.job = body;
    next();
  });
}

module.exports = Middleware;
