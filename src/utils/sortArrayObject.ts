import { LabelProps } from '../types';

export default function sortArrayObject(arrayObj: LabelProps[]): LabelProps[] {
    if (arrayObj === null) {
        return [];
    }
    return arrayObj.sort((a, b) => {
        const fa = a.value.toLowerCase();
        const fb = b.value.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
}
