import React from 'react'
import { CardColumns } from 'reactstrap'
import RecommendedPreview from './recommendedPreview'
import { RecommendedEntryProps } from '../types'

export default function RecommendedEntries({ posts }: { posts: Array<RecommendedEntryProps> }) {
    return (
        <section>
            <CardColumns>
                {posts.map((post) => (
                    <RecommendedPreview
                        body={post.body}
                        fields={post.fields}
                        fileAbsolutePath={post.fileAbsolutePath}
                        frontmatter={post.frontmatter}
                        key={post.fields.slug}
                    />
                ))}
            </CardColumns>
        </section>
    );
}