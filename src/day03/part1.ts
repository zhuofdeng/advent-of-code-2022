// Advent of Code - Day 3 - Part One

export function part1(input: string): number {
  const sackPairs = input.split('\n');
  let total = 0;
  sackPairs.forEach((pair) => {
    const midPoint = pair.length / 2;
    const sack1 = pair.substring(0, midPoint)
    const sack2 = pair.substring(midPoint)
    
    const sack1Items = sack1.split('');
    for(let i = 0; i < sack1Items.length; i++) {
      if (sack2.includes(sack1Items[i])) {
        const charCode = sack1Items[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // upper case
          total += charCode - 65 + 27;
        } else if (charCode >= 97 && charCode <= 122) { // lower case
          total += charCode - 96;
        }
        break;
      }
    }

  });
  return total;
}
