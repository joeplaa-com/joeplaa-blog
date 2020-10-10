import sortArrayObject from './sortArrayObject'

export default function formatPostTags(tags) {
    const postTags = [];
    tags.forEach(tag => {
        postTags.push({ value: tag, label: tag, count: 1 });
    });
    return sortArrayObject(postTags)
}