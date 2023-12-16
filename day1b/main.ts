import fs from 'fs';
import path from 'path';

function getFirstAndLastDigits(str: string): [number | null, number | null] {
  const reversedStr = str.split('').reverse().join('');
  const firstMatch = str.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
  const lastMatch = reversedStr.match(/enin|thgie|neves|xis|evif|ruof|eerht|owt|eno|\d/);

  const digitMap: { [key: string]: number } = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'eno': 1, 'owt': 2, 'eerht': 3, 'ruof': 4, 'evif': 5, 'xis': 6, 'neves': 7, 'thgie': 8, 'enin': 9};
  const firstDigit = (firstMatch ? (/\d/.test(firstMatch[0]) ? parseInt(firstMatch[0]) : digitMap[firstMatch[0]]) : null);
  const lastDigit = (lastMatch ? (/\d/.test(lastMatch[0]) ? parseInt(lastMatch[0]) : digitMap[lastMatch[0]]) : null);

  return [firstDigit, lastDigit];
}

//read every line in the file input.txt and sum the concatenation of the first and last number of each line
const main = async () => {
  const input = await fs.promises.readFile(path.join(__dirname, 'input.txt'), 'utf-8');
  const lines = input.split('\n');
  let sum = 0;
  for (const line of lines) {
    const digits = getFirstAndLastDigits(line);
    console.log(digits[0], digits[1], Number(`${digits[0]}${digits[1]}`), line);
    sum += Number(`${digits[0]}${digits[1]}`);
  }
  console.log(sum);
};

main();