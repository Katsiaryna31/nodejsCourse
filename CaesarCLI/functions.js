const fs = require('fs');
const process = require('process');
const alphabet = require('./config');
let cipherOrder = 0;

let text = '';

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  text = data.toString();
});

const getCipherOrder = newCipherOrder => {
  if (newCipherOrder > 26 || newCipherOrder < -26) {
    cipherOrder = newCipherOrder % 26;
  } else {
    cipherOrder = newCipherOrder;
  }
};

const getReadyMessage = operation => {
  console.log(text);
  const textArray = Array.from(text);
  console.log(textArray);
  const newArray = [];
  textArray.forEach(letter => {
    const lowerLetter = letter.toLowerCase();
    if (operation === 'encoding') {
      if (!alphabet.includes(lowerLetter)) {
        newArray.push(lowerLetter);
      } else {
        const oldIndex = alphabet.indexOf(lowerLetter);
        let newIndex = oldIndex + cipherOrder;
        if (newIndex > 26 || newIndex < -26) {
          newIndex = newIndex % 26;
        }
        if (newIndex < 0) {
          newIndex = alphabet.length + newIndex;
        }
        if (letter === letter.toUpperCase()) {
          newArray.push(alphabet[newIndex].toUpperCase());
        } else {
          newArray.push(alphabet[newIndex]);
        }
      }
    } else if (operation === 'decoding') {
      if (!alphabet.includes(lowerLetter)) {
        newArray.push(lowerLetter);
      } else {
        const oldIndex = alphabet.indexOf(lowerLetter);
        let newIndex = oldIndex - cipherOrder;
        if (newIndex > 26 || newIndex < -26) {
          newIndex = newIndex % 26;
        }
        if (newIndex < 0) {
          newIndex = alphabet.length + newIndex;
        }
        if (letter === letter.toUpperCase()) {
          newArray.push(alphabet[newIndex].toUpperCase());
        } else {
          newArray.push(alphabet[newIndex]);
        }
      }
    }
  });
  process.stdout.write(newArray.join(''));
};

module.exports = { getCipherOrder, getReadyMessage };
