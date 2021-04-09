const fs = require('fs');

let csvData = 'id,\n';

for (let i = 0; i < 1000; i++) {
  csvData += `${i},\n`;
}

fs.writeFileSync('./id.csv', csvData);