import { useState } from 'react'
import { Button, Card, CardBody, CardText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FaTimes } from 'react-icons/fa'
import Img from 'react-optimized-image'
import PostBody from './post-body'
import PostImage from './post-image'
import PostSubtitle from './post-subtitle'
import PostTitle from './post-title'
import { data } from '../lib/data'
import { images } from '../lib/images'
import { PostTypeProps } from '../types'

export default function PortfolioPreview({
    title,
    content,
    postImage,
    date,
    excerpt,
    slug,
    tags,
    page
}: PostTypeProps) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Card>
                <CardBody>
                    <PostImage className='mb-2' slug={slug} title={title} picture={postImage} rounded={true} onClick={toggle} />
                    <PostTitle onClick={toggle} slug={slug} title={title} />
                    <PostSubtitle className='mb-2' date={date} page={page} tags={tags} />
                    <CardText>{excerpt}</CardText>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>

                <ModalBody>
                    <img
                        src={images[postImage]}
                        alt={'Cover Image for' + title}
                        className='img-fluid rounded'
                    />
                </ModalBody>

                <ModalBody>
                    <PostBody content={content} />
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        <FaTimes />
                        <span>{' '}{data.BacktoRecommended}</span>
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}