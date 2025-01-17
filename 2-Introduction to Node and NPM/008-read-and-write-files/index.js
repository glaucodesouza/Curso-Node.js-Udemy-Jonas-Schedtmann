const fs = require('fs');

const textInput = fs.readFileSync('./input.txt', 'utf-8');
console.log(textInput);

const textOutput = `This is what we know about the file: ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./output.txt', textOutput);
console.log(`File written!`);