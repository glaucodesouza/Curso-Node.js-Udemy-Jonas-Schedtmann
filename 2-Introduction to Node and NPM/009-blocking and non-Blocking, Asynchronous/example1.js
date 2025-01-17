const fs = require('fs');

//🚫BAD idea: Synchronous, blocking code
try {
  const input = fs.readFileSync(`./input.txt`,`utf-8`);
  console.log(input); 
} catch (error) {
  console.error('Catch part: Error reading file in blocking code example:', error);
}

//💡GOOD idea: Asynchronous, non-blocking code
fs.readFile('./input.txt', 'utf-8', (error, data) => {
  console.log(data);
  if (error) {
    console.error('if error part: Error reading file in asynchronous example:', error);
  }
});
console.log(`Reading input.txt in Asynchonous example...`);