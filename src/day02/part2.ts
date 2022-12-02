// Advent of Code - Day 2 - Part One
export function part2(input: string): number {
  const games = input.split('\n');
  const winScore = 6;
  const drawScore = 3;
  const lostScore = 0;
  const rockPoint = 1;
  const paperPoint = 2;
  const scissorsPoint = 3;
  let total = 0;
  games.forEach((section) => {
    const lines = section.split(' ');
    switch(lines[0]) {
      case 'A': // rock
        if (lines[1] === 'X') { // lose
          total += scissorsPoint;
        } else if (lines[1] === 'Y') { // draw
          total += (rockPoint + drawScore);
        } else if (lines[1] === 'Z') { // win
          total += (paperPoint + winScore);
        }
        break;
      case 'B': // paper
        if (lines[1] === 'X') { // lose
          total += rockPoint;
        } else if (lines[1] === 'Y') { // draw
          total += (paperPoint + drawScore);
        } else if (lines[1] === 'Z') { // win
          total += (scissorsPoint + winScore);
        }
        break;
      case 'C': // scissors
        if (lines[1] === 'X') { // lose
          total += paperPoint;
        } else if (lines[1] === 'Y') { // draw
          total += (scissorsPoint + drawScore);
        } else if (lines[1] === 'Z') { // win
          total += (rockPoint + winScore);
        }
        break;
    }
  });

  return total;
  }
  