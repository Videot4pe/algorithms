// Given a string s, find the length of the longest substring without repeating characters.

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let res: string[] = []
  let max = 0
  s.split('').forEach(c => {
    if (res.includes(c)) {
      if (res.length > max) {
        max = res.length
      }
      res.splice(0, res.indexOf(c) + 1)
    }
    res.push(c)
  })
  if (res.length > max) {
    max = res.length
  }
  return max
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('aabaab!bb'))