
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.trim().toLowerCase();
  let strArr = str.split('');
  let str2Arr = [];
  // console.log(strArr);
  for (let i = strArr.length-1; i >= 0; i--) {
    str2Arr.push(strArr[i]);
  }
  const str2 = str2Arr.join('');
  if (str1 === str2) {
    // console.log('true')
    return true;
  } else {
    // console.log('false');
    return false;
  }
}

module.exports = isPalindrome;
