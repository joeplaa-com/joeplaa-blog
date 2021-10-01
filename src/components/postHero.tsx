import React, { ReactElement } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import PostImage from './postImage';
import PostSubtitle from './postSubtitle';
import PostTitle from './postTitle';
import { PostBasicProps } from '../types';

export default function PostHero({ fields, frontmatter, pathname }: PostBasicProps): ReactElement {
    return (
        <Card className='mt-3'>
            <CardBody>
                <PostTitle path={true} slug={fields.slug} title={frontmatter.title} />
                <PostImage path={true} title={frontmatter.title} picture={frontmatter.cover.childImageSharp} slug={fields.slug} rounded={true} />
                <PostSubtitle className='mb-2' date={frontmatter.date} pathname={pathname} readingTime={fields.readingTime?.text} tags={frontmatter.tags} />
                <CardText>{frontmatter.excerpt}</CardText>
            </CardBody>
        </Card>
    );
}
