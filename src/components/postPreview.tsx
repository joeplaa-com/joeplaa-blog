import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'
import Avatar from './avatar'
import PostImage from './postImage'
import PostSubtitle from './postSubtitle'
import PostTitle from './postTitle'
import currentPage from '../utils/currentPage'
import { PostProps } from '../types'

export default function PostPreview({ excerpt, fields, fileAbsolutePath, frontmatter }: PostProps) {
    return (
        <Card>
            <CardBody>
                <PostImage path={true} className='mb-2' slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} />
                <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                <PostSubtitle className='mb-2' date={frontmatter.date} page={currentPage(fileAbsolutePath)} tags={frontmatter.tags} />
                <CardText>{excerpt}</CardText>
                <Avatar name={frontmatter.author} />
            </CardBody>
        </Card>
    );
}