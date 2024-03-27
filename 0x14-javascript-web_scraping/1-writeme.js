#!/usr/bin/node
// Script that writes a string to a file
let fs = require('fs');
fs.writeFile(process.argv[2], process.argv[3], 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
});
