import { ITagProps, LabelProps } from '../types';
import sortArrayObject from './sortArrayObject';

export default function formatAllTags(tags: ITagProps[]): LabelProps[] {
    const postTags = [];
    tags.forEach(tag => {
        postTags.push({ value: tag.fieldValue, label: tag.fieldValue, count: tag.totalCount });
    });
    return sortArrayObject(postTags);
}
