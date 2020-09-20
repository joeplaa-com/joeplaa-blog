import { useSelector } from 'react-redux'
import { CardColumns } from 'reactstrap'
import PostPreview from './post-preview';
import filterTag from '../lib/filterTag'
import { PostTypeProps } from '../types'

export default function PostStories({ posts, page, path }: { posts: Array<PostTypeProps>, page: string, path: string }) {
    const filter = useSelector((state) => state.filter);
    return (
        <section>
            <CardColumns>
                {posts.filter( (post) => (filterTag(post, filter.userFilter[page])) ).map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        postImage={post.postImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                        tags={post.tags}
                        page={page}
                        path={path}
                    />
                ))}
            </CardColumns>
        </section>
    );
}