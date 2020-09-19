
import { Card, CardBody, CardText } from 'reactstrap'
import Avatar from './avatar'
import PostImage from './post-image'
import PostSubtitle from './post-subtitle'
import PostTitle from './post-title'
import { PostTypeProps } from '../types'

export default function PostHero({
    title,
    postImage,
    date,
    excerpt,
    author,
    slug,
    tags,
    page,
    path
}: PostTypeProps) {
    return (
        <section>
            <Card>
                <CardBody>
                    <PostTitle path={path} slug={slug} title={title} />
                    <PostSubtitle className='mb-2' date={date} page={page} tags={tags} />
                </CardBody>

                <PostImage title={title} picture={postImage} slug={slug} path={path} />

                <CardBody>
                    <CardText>{excerpt}</CardText>
                    <Avatar name={author.name} picture={author.picture} />
                </CardBody>
            </Card>
        </section>
    );
}
