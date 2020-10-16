export default function linkColor (color: string) {
    if (color === 'light') {
        return 'linkLight';
    } else if (color === 'dark') {
        return 'linkDark';
    } else if (color === 'navbar') {
        return 'linkNav';
    } else {
        return undefined
    }
}