// Advent of Code - Day 5 - Part Two

export function part2(input: string): string {
  const instructions = input.split('\n');
  const stacks = [
    ['D', 'T', 'W', 'N', 'L'],
    ['H', 'P', 'C'],
    ['J', 'M', 'G', 'D', 'N', 'H', 'P', 'W'],
    ['L', 'Q', 'T', 'N', 'S', 'W', 'C'],
    ['N', 'C', 'H', 'P'],
    ['B', 'Q', 'W', 'M', 'D', 'N', 'H', 'T'],
    ['L', 'S', 'G', 'J', 'R', 'B', 'M'],
    ['T', 'R', 'B', 'V', 'G', 'W', 'N', 'Z'],
    ['L', 'P', 'N', 'D', 'G', 'W'],
  ]
  instructions.forEach((instructon) => {
    const values = instructon.split(' ')
    const move = parseInt(values[1]);
    const from = parseInt(values[3]) - 1;
    const to = parseInt(values[5]) - 1;
    const crates = stacks[from].splice(0, move)
    stacks[to] = crates.concat(stacks[to])
  });

  const output = stacks.map((stack) => {
    return stack[0]
  });
  return output.join().replaceAll(',', '');
}
