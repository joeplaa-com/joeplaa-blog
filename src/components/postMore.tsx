import React from 'react'
import { CardDeck } from 'reactstrap'
import PostPreview from './postPreview'
import { PostProps } from '../types'

export default function PostStories({ posts }: { posts: Array<PostProps> }) {
    return (
        <section>
            <CardDeck>
                {posts.map((post) => (
                    <PostPreview
                        excerpt={post.excerpt}
                        fields={post.fields}
                        fileAbsolutePath={post.fileAbsolutePath}
                        frontmatter={post.frontmatter}
                        key={post.fields.slug}
                    />
                ))}
            </CardDeck>
        </section>
    );
}