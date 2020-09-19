import { useRouter } from 'next/router'
import { Button, Col, Row } from 'reactstrap'
import { FaTimes } from 'react-icons/fa'
import Avatar from './avatar'
import DateFormater from './date-formater'
import PostImage from './post-image'
import { data } from '../lib/data'
import { PostHeaderProps } from '../types'

export default function PostHeader({ title, postImage, date, author, slug, path }: PostHeaderProps) {
    const router = useRouter();
    return (
        <>
            <Row>
                <Col>
                    <h1>{title}</h1>
                </Col>
                <Col xs='auto' className='float-right'>
                    <Button outline color='dark' onClick={() => router.back()}>
                        <FaTimes />
                        <span>{' '}{data.Backto}</span>
                    </Button>
                </Col>
            </Row>
            <div className='mb-2 mt-2 mb-sm-3 mt-sm-3 mb-sm-4 mt-sm-4'>
                <PostImage title={title} picture={postImage} slug={slug} rounded={true} path={path} />
            </div>
            <div className='mx-auto mb-2 mt-2 mb-sm-3 mt-sm-3 mb-sm-4 mt-sm-4'>
                <div className='mb-2'>
                    <Avatar name={author.name} picture={author.picture} />
                </div>
                <div>
                    <em><DateFormater dateString={date} /></em>
                </div>
            </div>
        </>
    );
}
