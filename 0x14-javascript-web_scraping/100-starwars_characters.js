#!/usr/bin/node
// Script that prints all characters of a Star Wars movie
const request = require('request');
const url = 'https://swapi.co/api/films/' + process.argv[2];
request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const films = JSON.parse(body);
    for (const character of films.characters) {
      request.get(character, function (err, response, body) {
        const films = JSON.parse(body);
        if (err) {
          console.log(err);
        } else if (response.statusCode === 200) {
          console.log(films.name);
        }
      });
    }
  }
});
