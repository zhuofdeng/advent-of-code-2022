// Advent of Code - Day 10 - Part One

const getXRegisterValue = (cycles: number, instructions: string[][]) => {
  let numCycles = 0;
  let x = 1;
  let i;

  for(i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    if (instruction[0] === 'noop') {
      numCycles += 1;
    } else if (instruction[0] === 'addx') {
      numCycles += 2;
      if (cycles - numCycles >= 1) {
        x += parseInt(instruction[1]);
      }
    }

    if (numCycles >= cycles) {
      break;
    }
  }

  return x * cycles;
}

export function part1(input: string): number {
  const instructions = input.split('\n').map((v) => v.split(' '));
  const cycles = [20, 60, 100, 140, 180, 220];
  let total = 0;
  cycles.forEach((cycle) => {
    total += (getXRegisterValue(cycle, instructions))
  })

  return total;
}
