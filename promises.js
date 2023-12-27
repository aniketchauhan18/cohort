//let's create promises in js
function asyncFunction() {
  let p = new Promise(function (resolve){
    resolve("hi there!!");
  })
  return p;
}

async function main() {
  let value = await asyncFunction();
  // console.log(value);
}

main();