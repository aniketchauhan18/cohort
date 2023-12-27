const fs = require('fs');
function readFile () {
  fs.readFile('aniket.txt', 'utf8', (err, data) => {
    console.log(data);
  });
}

readFile();