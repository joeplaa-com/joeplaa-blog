import getTags from './getTags'

export default function filterTag(post, tags) {
    return tags.map(tag => getTags(post.tags).some(el => el.value === tag.value)).some(res => res === true);
}