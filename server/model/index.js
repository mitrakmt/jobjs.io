const express = require('express');
const Model = express.Router()
const request = require("request");

Model.getAllJobs = () => {
  
  var options = {
    method: 'GET',
    url: 'https://jobs.github.com/positions.json',
    qs: {
      description: 'javascript'
    },
    headers: {
       'postman-token': 'e6912cb2-69d5-44aa-2387-25bcf03dd8e0',
       'cache-control': 'no-cache',
       'content-type': 'application/json'
     },
    body: {
      text: 'Hey there everyone i miss you all!'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

module.export = Model;
