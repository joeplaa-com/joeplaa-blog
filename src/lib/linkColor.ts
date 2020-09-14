export default function linkColor (colorString) {
    if (colorString === 'light') {
        return 'linkLight';
    } else if (colorString === 'navbar') {
        return 'linkNav';
    } else {
        return null
    }
}