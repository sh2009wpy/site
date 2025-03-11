const fs = require('fs');
const path = require('path');

function addString(newString) {
  const dataFilePath = path.join(__dirname, '../data.json');
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  data.strings.push(newString);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

module.exports = addString;
