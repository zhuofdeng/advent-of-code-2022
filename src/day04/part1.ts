// Advent of Code - Day 4 - Part One

export function part1(input: string): number {
  const pairs = input.split('\n');
  let total = 0;
  pairs.forEach((pair) => {
    const sectors = pair.split(',');
    const elf1 = sectors[0].split('-').map((v) => parseInt(v));
    const elf2 = sectors[1].split('-').map((v) => parseInt(v));
    if ((elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) || (elf2[0] >= elf1[0] && elf2[1] <= elf1[1])) {
      total += 1;
    }
  });
  return total;
}
