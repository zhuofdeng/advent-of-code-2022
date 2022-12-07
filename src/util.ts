export const hasRepeatedCharacters = (text: string): boolean => {
    for(let i = 0; i < text.length; i++) {
        if (text.lastIndexOf(text.charAt(i)) !== i) {
            return true
        }
    }
    return false;
}