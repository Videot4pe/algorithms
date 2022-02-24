/*
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

const phoneBtns = {
  1: [],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [' ']
}

function merge(nextDigits, currentCombinations = []) {
  if (!nextDigits.length) {
    return currentCombinations
  }
  currentCombinations = currentCombinations.flatMap(x => {
    return phoneBtns[+nextDigits[0]].map(y => `${x}${y}`)
  })
  return merge(nextDigits.slice(1, nextDigits.length), currentCombinations)
}

function letterCombinations(digits: string): string[] {
  return merge(digits.slice(1, digits.length), phoneBtns[+digits[0]])
};

test('', () => {
  expect(letterCombinations('23')).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
});

test('', () => {
  expect(letterCombinations('')).toStrictEqual([]);
});

test('', () => {
  expect(letterCombinations('2')).toStrictEqual(["a","b","c"]);
});