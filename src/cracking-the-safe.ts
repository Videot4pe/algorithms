/*
  There is a safe protected by a password. The password is a sequence of n digits where each digit can be in the range [0, k - 1].
  The safe has a peculiar way of checking the password. When you enter in a sequence, it checks the most recent n digits that were entered each time you type a digit.

  For example, the correct password is "345" and you enter in "012345":
    After typing 0, the most recent 3 digits is "0", which is incorrect.
    After typing 1, the most recent 3 digits is "01", which is incorrect.
    After typing 2, the most recent 3 digits is "012", which is incorrect.
    After typing 3, the most recent 3 digits is "123", which is incorrect.
    After typing 4, the most recent 3 digits is "234", which is incorrect.
    After typing 5, the most recent 3 digits is "345", which is correct and the safe unlocks.
  Return any string of minimum length that will unlock the safe at some point of entering it.
*/

function crackSafe(n: number, k: number): string {
  const map = {}
  if (n === 1 && k === 1) {
    return '0'
  }
  let result = ''
  let initialSequence = new Array(n).fill('0').join('')
  map[initialSequence] = true

  function dfs(sequence) {
    for (let i = 0; i < k; i++) {
      const newSequence = sequence.substring(1) + i.toString()
      if(!map[newSequence]) {
        map[newSequence] = true
        dfs(newSequence)
        result += i.toString()
      }
    }
  }
  dfs(initialSequence)
  return result + initialSequence
};

test('', () => {
  expect(crackSafe(1, 2)).toBe('10');
});

test('', () => {
  expect(crackSafe(2, 2)).toBe('01100');
});

test('', () => {
  expect(crackSafe(3, 2)).toBe('0011101000');
});
