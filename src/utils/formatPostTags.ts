import sortArrayObject from './sortArrayObject'
import { LabelProps } from '../types'

export default function formatPostTags(tags: Array<string>) {
    const postTags = [] as Array<LabelProps>;
    tags.forEach(tag => {
        postTags.push({ value: tag, label: tag, count: 1 });
    });
    return sortArrayObject(postTags)
}