import es6Example from './es6Example';

test('adds 1 to each elements in array [1, 2, 3] to equal [2, 3, 4]', () => {
  expect(es6Example([1, 2, 3])).toEqual([2, 3, 4]);
});