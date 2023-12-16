import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function getFirstAndLastDigits(str: string): [number | null, number | null] {
    const firstMatch = str.match(/\d/);
    const lastMatch = str.match(/\d(?=\D*$)/);

    const firstDigit = firstMatch ? parseInt(firstMatch[0]) : null;
    const lastDigit = lastMatch ? parseInt(lastMatch[0]) : null;

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