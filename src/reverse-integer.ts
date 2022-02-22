/*
  Given a signed 32-bit integer x, return x with its digits reversed. 
  If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

// https://leetcode.com/problems/reverse-integer/

const MAX32VALUE = 0x7FFFFFFF

function reverse(x: number): number {
  const sign = Math.sign(x)
  const result = +Math.abs(x).toString().split('').reverse().join('')

  if (result > MAX32VALUE) {
    return 0
  }

  return sign * result
};
console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
console.log(reverse(1)) // 1
console.log(reverse(99999999999)) // 0