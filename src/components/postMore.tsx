import React from 'react'
import { CardDeck } from 'reactstrap'
import PostPreview from './postPreview'
import { PostBasicProps } from '../types'

export default function PostStories({ posts }: { posts: Array<PostBasicProps> }) {
    return (
        <section>
            <CardDeck>
                {posts.map((post) => (
                    <PostPreview
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