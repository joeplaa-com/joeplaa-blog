import Modernizr from 'modernizr';

export default function detectWebp () {
    if (Modernizr.webp) {
        return true;
    } else {
        return false;
    }
}
