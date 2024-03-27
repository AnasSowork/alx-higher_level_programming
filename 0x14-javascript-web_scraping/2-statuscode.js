#!/usr/bin/node
// Script that displays the status code of a GET request
let request = require('request');
request.get(process.argv[2], function (err, response) {
  if (err) {
    return console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
