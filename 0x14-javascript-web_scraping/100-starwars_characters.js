#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.error('Usage: ./starwars_characters.js <movie_id>');
  process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch movie details');
    return;
  }

  const movie = JSON.parse(body);
  const characters = movie.characters;

  if (!characters || characters.length === 0) {
    console.log('No characters found for this movie.');
    return;
  }

  characters.forEach(characterUrl => {
    request.get(characterUrl, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }

      if (response.statusCode !== 200) {
        console.error('Failed to fetch character details');
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
    });
  });
});
