import React from 'react'
import { Card, CardBody, CardFooter, CardText } from 'reactstrap'
import Avatar from './avatar'
import PostImage from './postImage'
import PostSubtitle from './postSubtitle'
import PostTitle from './postTitle'
import truncateText from '../utils/truncateText'
import { PostBasicProps } from '../types'

export default function PostPreview({ fields, frontmatter, pathname }: PostBasicProps) {
    return (
        <Card>
            <CardBody>
                <PostImage path={true} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                <PostSubtitle className='mb-2' date={frontmatter.date} pathname={pathname} readingTime={fields.readingTime?.text} tags={frontmatter.tags} />
                <CardText>{truncateText(frontmatter.excerpt, 150)}</CardText>
            </CardBody>
            {pathname.includes('blog')
                ? <CardFooter>
                    <Avatar name={frontmatter.author} />
                </CardFooter>
                : null}
        </Card>
    );
}