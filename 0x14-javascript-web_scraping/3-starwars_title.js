#!/usr/bin/node
// Script that prints the title of a Star Wars movie where the episode number matches a given integer
const request = require('request');
const url = 'http://swapi.co/api/films/';
request.get(url + process.argv[2] + '/', function (err, response, body) {
  if (err) {
    return console.log(err);
  } else if (response.statusCode === 200) {
    console.log(JSON.parse(body).title);
  }
});
