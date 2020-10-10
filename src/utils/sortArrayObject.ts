export default function sortArrayObject(arrayObj) {
    return arrayObj.sort((a, b) => {
        const fa = a.value.toLowerCase(),
            fb = b.value.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
}