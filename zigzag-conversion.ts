/* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows); */

// https://leetcode.com/problems/zigzag-conversion/

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s
  }
  let res = new Array(numRows).fill('')
  let direction = -1
  for (let i = 0, j = 0; i < s.length; i++, j += direction) {
    res[j] += s[i]
    if (j === numRows - 1 || j === 0) {
      direction = -direction
    }
  }
  return res.reduce((acc, str) => acc + str, '')
};

console.log(convert("PAYPALISHIRING", 3)) // 'PAHNAPLSIIGYIR'
console.log(convert("PAYPALISHIRING", 4)) // 'PINALSIGYAHRPI'
console.log(convert("A", 1)) // 'A'
console.log(convert("AB", 1)) // 'AB'