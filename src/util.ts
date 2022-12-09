export const hasRepeatedCharacters = (text: string): boolean => {
    for(let i = 0; i < text.length; i++) {
        if (text.lastIndexOf(text.charAt(i)) !== i) {
            return true
        }
    }
    return false;
}

export const splitInputInto2DGrid = (input: string): number[][] => {
    return input.split('\n').map((l) => l.split('').map((n) => parseInt(n)));
}