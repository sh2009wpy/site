const fs = require('fs');
const path = require('path');

function getStrings() {
  const dataFilePath = path.join(__dirname, '../data.json');
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  return data.strings;
}

module.exports = getStrings;
