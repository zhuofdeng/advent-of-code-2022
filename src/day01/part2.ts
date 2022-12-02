// Advent of Code - Day 1 - Part Two
export function part2(input: string): number {
  const sections = input.split('\n\n');
  let topThree = [0, 0, 0];
  let totalCalories = 0;
  sections.forEach((section) => {
    const lines = section.split('\n');
    let total = 0;
    lines.forEach((line) => {
      total += parseInt(line)
    });
    
    // find mid point, if larger, check right, if lower check left.
    if (total > topThree[1]) {
      if(total > topThree[2]) {
        // update highest
        topThree[2] = total;
      } else {
        // replace lowest with current mid.
        topThree[0] = topThree[1];
        // update mid.
        topThree[1] = total;
      }
    } else if (total < topThree[1]) {
      if(total > topThree[0]) {
        // update lowest
        topThree[0] = total;
      }
    }
  });
  // now, just sum all three.
  topThree.forEach((i) => {
    totalCalories += i;
  })
  return totalCalories;
}
