// Advent of Code - Day 10 - Part Two
const render = (output: string[], numCycles: number, MAX_CYCLES_PER_ROW: number, x: number): void  =>{
    const lineIndex = numCycles % MAX_CYCLES_PER_ROW - 1;
    const spritePos = [x-1, x, x+1]
    if(spritePos.includes(numCycles)) {
      output[lineIndex] += '#';
    } else {
      output[lineIndex] += '.';
    }
  }
  
  const runInstructions = (cycles: number, instructions: string[][]): string[] => {
    let numCycles = 0;
    let x = 1;
    let i = 0;
    let index = 0;
    // debugger
    const MAX_CYCLES_PER_ROW = 40;
    let output = ["", "", "", "", "", ""];
  
    while(i < instructions.length) {
      const instruction = instructions[i];
      if (instruction[0] === 'noop') {
        numCycles += 1;
        render(output, numCycles, MAX_CYCLES_PER_ROW, x);
      } else if (instruction[0] === 'addx') {
        numCycles += 1;
  
        render(output, numCycles, MAX_CYCLES_PER_ROW, x);
  
        numCycles += 1;
  
        render(output, numCycles, MAX_CYCLES_PER_ROW, x);
  
        if (cycles - numCycles >= 1) {
          x += parseInt(instruction[1]);
        }
      }
      
  
      
      i++;
    }
  
    return output;
  }
  
  export function part2(input: string): void {
    const instructions = input.split('\n').map((v) => v.split(' '));
    let cycle = 1,
      x = 1,
      noteScreen = 40,
      screen = ["", "", "", "", "", ""];
  
  // Draw to the screen (if haven't already in cycle)
  const draw = () => {
      let index = noteScreen / 40 - 1;
  
      if (screen[index].length < cycle - noteScreen + 40 && cycle <= 240) {
          // If cycle index of current line is in sprite
          if ([x - 1, x, x + 1].some((n) => n === (cycle - 1) % 40))
              screen[index] += "#";
          else screen[index] += ".";
      }
  
      if (cycle === noteScreen && cycle !== 240) noteScreen += 40;
  };
  
  // Loop through instructions
  for (let i = 0; i < instructions.length; i++) {
      draw();
      cycle++;
      if (instructions[i][0] === "addx") {
          draw();
          x += parseInt(instructions[i][1]);
          cycle++;
      }
      draw();
  }
  console.log(`Screen:\n${screen.join("\n")}`);
  }
  