// Given a string s, return the longest palindromic substring in s.

// https://leetcode.com/problems/longest-palindromic-substring/

function longestPalindrome(s: string): string {
  const length = s.length
  let [longestPalindrome, longestLength] = [s[0], 1]

  function palindromeSearch(left: number, right: number) {
    for(
      ;
      left >= 0 && right <= length && s[left] === s[right];
      left--, right++
    ) {
      const currentLength = right - left + 1
      if (currentLength > longestLength) {
        longestPalindrome = s.slice(left, right + 1)
        longestLength = currentLength
      }
    }
  }

  for (let i = 0; i < s.length; i++) {
    palindromeSearch(i, i)
    palindromeSearch(i, i + 1)
  }
  return longestPalindrome
};

console.log(longestPalindrome('babad')) // 'bab'
console.log(longestPalindrome('cbbd')) // 'bb'
console.log(longestPalindrome('aaaa')) // 'aaaa'
console.log(longestPalindrome('bb')) // 'bb'
console.log(longestPalindrome('a')) // 'a'