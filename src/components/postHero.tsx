import React from 'react'
import { Card, CardBody, CardFooter, CardText } from 'reactstrap'
import Avatar from './avatar'
import PostImage from './postImage'
import PostSubtitle from './postSubtitle'
import PostTitle from './postTitle'
import currentPage from '../utils/currentPage'
import { PostProps } from '../types'

export default function PostHero({ excerpt, fields, fileAbsolutePath, frontmatter }: PostProps) {
    return (
        <section>
            <Card className='mt-3'>
                <CardBody>
                    <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                </CardBody>
                <PostImage path={true} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} slug={fields.slug} rounded={true} className='' />
                <CardBody>
                    <PostSubtitle className='mb-2' date={frontmatter.date} page={currentPage(fileAbsolutePath)} tags={frontmatter.tags} />
                    <CardText>{frontmatter.excerpt || excerpt}</CardText>
                </CardBody>
                <CardFooter>
                    <Avatar name={frontmatter.author} />
                </CardFooter>
            </Card>
        </section>
    );
}