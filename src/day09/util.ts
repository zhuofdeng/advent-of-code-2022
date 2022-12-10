export const horizontalDistance = (head: number[], tail: number[]): number => {
    const xDIf = head[1] - tail[1];
    return xDIf;
}

export const verticalDistance = (head: number[], tail: number[]): number => {
    const yDif = head[0] - tail[0];
    return yDif;
}
  