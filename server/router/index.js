const Router = require('express').Router();
const Controller = require('../controllers');
const Middleware = require('../controllers/middleware');
const co = require('co');

Router.route('/jobs')
  .get(Middleware.getAllJobs, (req, res) => {
    res.status(200).send(req.body.jobs);
  })

Router.route('/jobs/:query')
  .get(Middleware.getJob, (req, res) => {
    res.status(200).send(req.body.job);
  });

module.exports = Router;
