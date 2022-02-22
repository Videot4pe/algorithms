/*
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = strs[0]
  for (const str of strs) {
    for (let i = 0; i < longestPrefix.length; i++) {
      if (longestPrefix[i] != str[i]) {
        longestPrefix = longestPrefix.slice(0, i)
        break;
      }
    }
  }
  return longestPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
