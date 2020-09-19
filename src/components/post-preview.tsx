import { Card, CardBody, CardText } from 'reactstrap'
import Avatar from './avatar'
import PostImage from './post-image'
import PostSubtitle from './post-subtitle'
import PostTitle from './post-title'
import { PostTypeProps } from '../types'

export default function PostPreview({
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
        <Card>
            <CardBody>
                <PostImage className='mb-2' slug={slug} title={title} picture={postImage} rounded={true} path={path} />
                <PostTitle path={path} slug={slug} title={title} />
                <PostSubtitle className='mb-2' date={date} page={page} tags={tags} />
                <CardText>{excerpt}</CardText>
                <Avatar name={author.name} picture={author.picture} />
            </CardBody>
        </Card>
    );
}
