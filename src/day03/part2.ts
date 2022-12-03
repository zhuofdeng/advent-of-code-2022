// Advent of Code - Day 3 - Part Two

export function part2(input: string): number {
  const sacks = input.split('\n');
  let total = 0;
  
  for(let i = 0; i < sacks.length; i+=3) {
    const sack1Items = sacks[i].split('');
    for(let j = 0; j < sack1Items.length; j++) {
      if (sacks[i+1].includes(sack1Items[j]) && sacks[i+2].includes(sack1Items[j])) {
        const charCode = sack1Items[j].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // upper case
          total += charCode - 65 + 27;
        } else if (charCode >= 97 && charCode <= 122) { // lower case
          total += charCode - 96;
        }
        break;
      }
    }
  }

  return total;
}
