import fs from 'fs';
import path from 'path';

function getFirstAndLastDigitsPart1(str: string): [number | null, number | null] {
  const firstMatch = str.match(/\d/);
  const lastMatch = str.match(/\d(?=\D*$)/);

  const firstDigit = firstMatch ? parseInt(firstMatch[0]) : null;
  const lastDigit = lastMatch ? parseInt(lastMatch[0]) : null;

  return [firstDigit, lastDigit];
}

function getFirstAndLastDigitsPart2(str: string): [number | null, number | null] {
  const reversedStr = str.split('').reverse().join('');
  const firstMatch = str.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
  const lastMatch = reversedStr.match(/enin|thgie|neves|xis|evif|ruof|eerht|owt|eno|\d/);

  const digitMap: { [key: string]: number } = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'eno': 1, 'owt': 2, 'eerht': 3, 'ruof': 4, 'evif': 5, 'xis': 6, 'neves': 7, 'thgie': 8, 'enin': 9};
  const firstDigit = (firstMatch ? (/\d/.test(firstMatch[0]) ? parseInt(firstMatch[0]) : digitMap[firstMatch[0]]) : null);
  const lastDigit = (lastMatch ? (/\d/.test(lastMatch[0]) ? parseInt(lastMatch[0]) : digitMap[lastMatch[0]]) : null);

  return [firstDigit, lastDigit];
}

const part1 = async (): Promise<number> => {
  const input = await fs.promises.readFile(path.join(__dirname, 'input.txt'), 'utf-8');
  const lines = input.split('\n');
  let sum = 0;
  for (const line of lines) {
    const digits = getFirstAndLastDigitsPart1(line);
    //console.log(digits[0], digits[1], Number(`${digits[0]}${digits[1]}`), line);
    sum += Number(`${digits[0]}${digits[1]}`);
  }
  return sum;
};

const part2 = async (): Promise<number> => {
  const input = await fs.promises.readFile(path.join(__dirname, 'input.txt'), 'utf-8');
  const lines = input.split('\n');
  let sum = 0;
  for (const line of lines) {
    const digits = getFirstAndLastDigitsPart2(line);
    //console.log(digits[0], digits[1], Number(`${digits[0]}${digits[1]}`), line);
    sum += Number(`${digits[0]}${digits[1]}`);
  }
  return sum;
};

(async () => {
  const part1result = await part1();
  const part2result = await part2();
  console.log('Part1:', part1result);
  console.log('Part2:', part2result);
})();