// Task 1
// 0000..007F; English
// 0530..058F; Armenian
// 0400..04FF; Russian
// detect();

function detect() {
  const language = /[\u0000-\u007F]+/g;
  const string = "Я was going տուն";
  const matchedString = string.match(language);

  return matchedString;
}

// Task 2
// const string1 = "anna";
// const string2 = "smith";
// palindrome(string1);
// palindrome(string2);

function palindrome(string) {
  const length = string.length;
  const midPoint = Math.floor(length / 2);

  for (let i = 0; i < midPoint; i += 1) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Task 3
// countMoves();

function countMoves(inputArray) {
  let moves = 0;
  const series = inputArray;

  for (let i = 1; i < series.length; i += 1) {
    if (series[i] <= series[i - 1]) {
      const diff = series[i - 1] - series[i] + 1;
      series[i] += diff;
      moves += diff;
    }
  }

  return moves;
}
