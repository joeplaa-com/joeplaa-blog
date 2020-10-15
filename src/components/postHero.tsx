import React, { lazy, Suspense } from 'react'
import { Card, CardBody, CardFooter, CardText } from 'reactstrap'
const Avatar = lazy(() => import('./avatar'))
const PostImage = lazy(() => import('./postImage'))
const PostSubtitle = lazy(() => import('./postSubtitle'))
const PostTitle = lazy(() => import('./postTitle'))
import RenderLoader from './renderLoader'
import currentPage from '../utils/currentPage'
import { PostBasicProps } from '../types'

export default function PostHero({ fields, fileAbsolutePath, frontmatter }: PostBasicProps) {
    const isSSR = typeof window === "undefined";
    return (
        <section>
            <Card className='mt-3'>
                {!isSSR && (
                    <Suspense fallback={<RenderLoader />}>
                        <CardBody>
                            <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                        </CardBody>
                        <PostImage path={true} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} slug={fields.slug} rounded={true} />
                        <CardBody>
                            <PostSubtitle className='mb-2' date={frontmatter.date} page={currentPage(fileAbsolutePath)} tags={frontmatter.tags} />
                            <CardText>{frontmatter.excerpt}</CardText>
                        </CardBody>
                        <CardFooter>
                            <Avatar name={frontmatter.author} />
                        </CardFooter>
                    </Suspense>
                )}
            </Card>
        </section>
    );
}