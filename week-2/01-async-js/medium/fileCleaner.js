const fs = require('fs');

function fileCleaner() {
  fs.readFile('aniket.txt', 'utf-8', function(err, data){
    const fileData = data;
    const filteredData  = fileData.replace(/\s+/g, ' ').trim();
    fs.writeFile('aniket.txt', filteredData, function(err){
      if (err){
        console.log(err);
      }
    });
    console.log(filteredData);
  })
}

fileCleaner();