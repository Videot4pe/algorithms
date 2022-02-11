// Given an integer x, return true if x is palindrome integer.

// https://leetcode.com/problems/palindrome-number/

function isPalindromeFirstTry(x: number): boolean {
  const stringNumber = x.toString()
  return stringNumber === stringNumber.split('').reverse().join('')
};

function isPalindrome(x: number): boolean {
  const stringNumber = x.toString()
  for (let i = 0, j = stringNumber.length - 1; i < j; i++, j--) {
    if (stringNumber[i] !== stringNumber[j]) {
      return false
    }
  }
  return true
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
console.log(isPalindrome(1)) // true