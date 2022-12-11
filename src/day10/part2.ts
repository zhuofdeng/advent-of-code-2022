// Advent of Code - Day 10 - Part Two
const render = (output: string[], numCycles: number, MAX_CYCLES_PER_ROW: number, x: number): void  =>{
  const lineIndex = Math.floor(numCycles / MAX_CYCLES_PER_ROW);
  const spritePos = [x-1, x, x+1];

  if(spritePos.includes(numCycles%MAX_CYCLES_PER_ROW)) {
    output[lineIndex] += '#';
  } else {
    output[lineIndex] += '.';
  }
}

const cycleReachedEnd = (numCycles: number, MAX_CYCLES_PER_ROW: number) => {
  return (numCycles % MAX_CYCLES_PER_ROW === 0);
}

const runInstructions = (cycles: number, instructions: string[][]): string[] => {
  let numCycles = 0;
  let x = 1;
  let i = 0;
  const MAX_CYCLES_PER_ROW = 40;
  let output = ["", "", "", "", "", ""];

  while(i < instructions.length && numCycles < 240) {
    const instruction = instructions[i];
    if (instruction[0] === 'noop') {
      render(output, numCycles, MAX_CYCLES_PER_ROW, x);
      numCycles += 1;
    } else if (instruction[0] === 'addx') {
      render(output, numCycles, MAX_CYCLES_PER_ROW, x);
      numCycles += 1;
      render(output, numCycles, MAX_CYCLES_PER_ROW, x);
      numCycles += 1;
      if (cycles - numCycles >= 1) {
        x += parseInt(instruction[1]);
      }
    }
    i++;
  }

  return output;
}

export function part2(input: string): string[] {
  const instructions = input.split('\n').map((v) => v.split(' '));
  const output = runInstructions(240, instructions);
  return output;
}
