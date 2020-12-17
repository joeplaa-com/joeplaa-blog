import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'
import PostImage from './postImage'
import PostSubtitle from './postSubtitle'
import PostTitle from './postTitle'
import truncateText from '../utils/truncateText'
import { PostBasicProps } from '../types'

export default function PostPreview ({ className, fields, frontmatter, pathname }: PostBasicProps) {
    return (
        <Card className={className}>
            <CardBody>
                <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                <PostImage path={true} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                <PostSubtitle className='mb-2' date={frontmatter.date} pathname={pathname} readingTime={fields.readingTime?.text} tags={frontmatter.tags} />
                <CardText>{truncateText(frontmatter.excerpt, 150)}</CardText>
            </CardBody>
        </Card>
    );
}