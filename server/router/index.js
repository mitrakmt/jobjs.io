const Router = require('express').Router();
const Helpers = require('../controllers/helpers');
const Middleware = require('../controllers/middleware');
const db = require('../db');
const User = require('../db/User');
const co = require('co');

Router.route('/jobs/github')
  .get(Helpers.getGithubJobs, (req, res) => {
    res.status(200).type('text/html').send(req.body.jobs);
  })

Router.route('/jobs/github/:query')
  .get(Helpers.getGithubJob, (req, res) => {
    res.status(200).send(req.body.job);
  });

Router.route('/jobs/remoteok')
.get(Helpers.getRemoteokJobs, (req, res) => {
  res.status(200).send(req.body.jobs);
})

Router.route('/jobs/remoteok/:query')
  .get(Helpers.getRemoteokJob, (req, res) => {
    res.status(200).send(req.body.job);
  });

Router.route('/jobs/dice')
.get(Helpers.getDiceJobs, (req, res) => {
  res.status(200).send(req.body.jobs);
})

Router.route('/jobs/dice/:query')
  .get(Helpers.getDiceJob, (req, res) => {
    res.status(200).send(req.body.job);
  });

module.exports = Router;
