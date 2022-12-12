export const hasRepeatedCharacters = (text: string): boolean => {
    for(let i = 0; i < text.length; i++) {
        if (text.lastIndexOf(text.charAt(i)) !== i) {
            return true
        }
    }
    return false;
}

export const splitInputInto2DNumberGrid = (input: string): number[][] => {
    return input.split('\n').map((l) => l.split('').map((n) => parseInt(n)));
}

export const splitInputInto2DGrid = (input: string): string[][] => {
    return input.split('\n').map((l) => l.split(''));
}