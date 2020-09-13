export default function getTags(tags) {
    const postTags = [];
    tags.split(', ' || ',').forEach(el => {
        postTags.push({ value: el, label: el });
    });
    return postTags
}