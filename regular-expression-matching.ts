/*
  Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

    '.' Matches any single character.​​​​
    '*' Matches zero or more of the preceding element.

  The matching should cover the entire input string (not partial).
*/

function isMatch(s: string, p: string): boolean {
  
};

console.log(isMatch('aa', 'a')) // false
console.log(isMatch('aa', 'a*')) // true
console.log(isMatch('ab', '.*')) // true