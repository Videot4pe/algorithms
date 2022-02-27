/*
  Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, 
  return the maximum number of points that lie on the same straight line.
*/

function maxPoints(points: number[][]): number {
  let res = 1
  for (let i = 0; i < points.length; i++) {
    let map = {}
    let vertical = 1
    for (let j = i + 1; j < points.length; j++) {
      if (points[j][0] - points[i][0] === 0) {
        vertical++
        continue
      }
      const slope = (points[j][1] - points[i][1])/(points[j][0] - points[i][0])
      if (map[slope]) {
        map[slope] += 1
      } else {
        map[slope] = 2
      }
      if (map[slope] > res) {
        res = map[slope]
      }
    }
    if (vertical > res) {
      res = vertical
    }
  }
  return res
};

test('', () => {
  expect(maxPoints([[1,1],[2,2],[3,3]])).toBe(3);
});

test('', () => {
  expect(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])).toBe(4);
});

test('', () => {
  expect(maxPoints([[2,3],[3,3],[-5,3]])).toBe(3);
});

test('', () => {
  expect(maxPoints([[3,3],[3,2],[3,-1]])).toBe(3);
});

test('', () => {
  expect(maxPoints([[0,1],[0,0],[0,4],[0,-2],[0,-1],[0,3],[0,-4]])).toBe(7);
});
