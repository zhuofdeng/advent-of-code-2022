// Advent of Code - Day 2 - Part One
export function part1(input: string): number {
    const games = input.split('\n');
    const winScore = 6;
    const drawScore = 3;
    const lostScore = 0;
    let total = 0;
    games.forEach((section) => {
      const lines = section.split(' ');
      switch(lines[0]) {
        case 'A': // rock
          // rock
          if (lines[1] === 'X') {
            total += (1 + drawScore);
          } else if (lines[1] === 'Y') { // paper
            total += (2 + winScore);
          } else if (lines[1] === 'Z') { // scissors
            total += (3 + lostScore);
          }
          break;
        case 'B': // paper
          // rock
          if (lines[1] === 'X') {
            total += (1 + lostScore);
          } else if (lines[1] === 'Y') { // paper
            total += (2 + drawScore);
          } else if (lines[1] === 'Z') { // scissors
            total += (3 + winScore);
          }
          break;
        case 'C': // scissors
          // rock
          if (lines[1] === 'X') {
            total += (1 + winScore);
          } else if (lines[1] === 'Y') { // paper
            total += (2 + lostScore);
          } else if (lines[1] === 'Z') { // scissors
            total += (3 + drawScore);
          }
          break;
      }
    });
  
    return total;
  }
  