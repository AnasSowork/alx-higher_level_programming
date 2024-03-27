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
  const charactersUrls = movie.characters;

  if (!charactersUrls || charactersUrls.length === 0) {
    console.log('No characters found for this movie.');
    return;
  }

  const fetchCharacter = (url) => {
    return new Promise((resolve, reject) => {
      request.get(url, function (error, response, body) {
        if (error) {
          reject(error);
          return;
        }

        if (response.statusCode !== 200) {
          reject('Failed to fetch character details');
          return;
        }

        const character = JSON.parse(body);
        resolve(character.name);
      });
    });
  };

  const fetchCharacters = async () => {
    for (const characterUrl of charactersUrls) {
      try {
        const characterName = await fetchCharacter(characterUrl);
        console.log(characterName);
      } catch (error) {
        console.error(error);
      }
    }
  };

  fetchCharacters();
});
