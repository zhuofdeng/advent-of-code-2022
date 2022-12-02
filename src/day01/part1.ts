// Advent of Code - Day 1 - Part One
export function part1(input: string): number {
  const sections = input.split('\n\n');
  let highest = 0;
  sections.forEach((section) => {
    const lines = section.split('\n');
    let total = 0;
    lines.forEach((line) => {
      total += parseInt(line)
    });
    if (highest < total) {
      highest = total;
    }
  });

  return highest;
}
