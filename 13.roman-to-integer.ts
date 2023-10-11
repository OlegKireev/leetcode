/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const ROMAN_VALUE = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  const isNextSubtract = (current: string, next: string) => {
    return ROMAN_VALUE[current] * 10 === ROMAN_VALUE[next] || ROMAN_VALUE[current] * 5 === ROMAN_VALUE[next];
  }

  return s
    .split('')
    .reduce((acc, cur, i, arr) => {
      if (isNextSubtract(cur, arr[i + 1])) {
        return acc - ROMAN_VALUE[cur];
      }
      return acc + ROMAN_VALUE[cur]
  }, 0);
  
};
// @lc code=end

