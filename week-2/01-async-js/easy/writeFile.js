const fs = require('fs');
async function writeFile() {
  await fs.promises.writeFile('aniket.txt', 'new content added');
  console.log("New files added"); 
}

writeFile();