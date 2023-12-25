/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length){
    return false;
  }
  let objectCounter = {}; // creating an empty object

  for (let element of str1) { // for str1
    objectCounter[element] = (objectCounter[element] || 0) + 1; // checking how many times an alphabet is present in a string
  }

  for (let items of str2) { // for str2
    if (!objectCounter[items]){ // checking if the items are present in the object
      return false
    }
    objectCounter[items] -= 1;
  }

  return true;
}
module.exports = isAnagram;
