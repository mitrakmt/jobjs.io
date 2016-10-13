const express = require('express');
const Helpers = express.Router()
const request = require("request");
const _ = require('lodash');

Helpers.getGithubJobs = (req, res, next) => {

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

Helpers.getGithubJob = (req, res, next) => {

}

Helpers.getRemoteokJobs = (req, res, next) => {

  var options = {
    method: 'GET',
    url: 'https://remoteok.io/index.json',
    qs: {
      tags: 'javascript'
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

Helpers.getRemoteokJob = (req, res, next) => {

}

Helpers.getDiceJobs = (req, res, next) => {

  var options = {
    method: 'GET',
    url: 'http://service.dice.com/api/rest/jobsearch/v1/simple.json',
    qs: {
      text: 'javascript'
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

Helpers.getDiceJob = (req, res, next) => {

}

module.exports = Helpers;
