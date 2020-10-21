import React from 'react'
import { Card, CardBody, CardFooter, CardText } from 'reactstrap'
import Avatar from './avatar'
import PostImage from './postImage'
import PostSubtitle from './postSubtitle'
import PostTitle from './postTitle'
import { PostBasicProps } from '../types'

export default function PostHero({ fields, frontmatter, pathname }: PostBasicProps) {
    return (
        <section>
            <Card className='mt-3'>
                <CardBody>
                    <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                </CardBody>
                <PostImage path={true} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} slug={fields.slug} rounded={true} />
                <CardBody>
                    <PostSubtitle className='mb-2' date={frontmatter.date} pathname={pathname} tags={frontmatter.tags} />
                    <CardText>{frontmatter.excerpt}</CardText>
                </CardBody>
                <CardFooter>
                    <Avatar name={frontmatter.author} />
                </CardFooter>
            </Card>
        </section>
    );
}