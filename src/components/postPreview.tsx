import React, { lazy, Suspense } from 'react'
import { Card, CardBody, CardFooter, CardText } from 'reactstrap'
const Avatar = lazy(() => import('./avatar'))
import ClientOnly from './clientOnly'
const PostImage = lazy(() => import('./postImage'))
const PostSubtitle = lazy(() => import('./postSubtitle'))
const PostTitle = lazy(() => import('./postTitle'))
import RenderLoader from './renderLoader'
import truncateText from '../utils/truncateText'
import { PostBasicProps } from '../types'

export default function PostPreview({ fields, frontmatter, pathname }: PostBasicProps) {
    return (
        <Card>
            <ClientOnly>
                <Suspense fallback={<RenderLoader />}>
                    <CardBody>
                        <PostImage path={true} slug={fields.slug} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} rounded={true} height={180} />
                        <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                        <PostSubtitle className='mb-2' date={frontmatter.date} pathname={pathname} tags={frontmatter.tags} />
                        <CardText>{truncateText(frontmatter.excerpt, 150)}</CardText>
                    </CardBody>
                    {pathname.includes('blog')
                        ? <CardFooter>
                            <Avatar name={frontmatter.author} />
                        </CardFooter>
                        : null}
                </Suspense>
            </ClientOnly>
        </Card>
    );
}