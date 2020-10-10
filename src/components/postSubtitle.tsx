import React from 'react'
import { CardSubtitle, Col, Row } from 'reactstrap'
import Tag from './tag'
import formatPostTags from '../utils/formatPostTags'
import { PostSubtitleProps, LabelProps } from '../types'

export default function PostSubtitle({ className, date, page, tags }: PostSubtitleProps) {
    return (
        <CardSubtitle className={className}>
            <Row>
                <Col xs='12' className='mb-2'><em>{date}</em></Col>
                <Col xs='12' className='tags'>
                    {formatPostTags(tags).map((tag: LabelProps) => (
                        <Tag key={tag.value} tag={tag} page={page} />
                    ))}
                </Col>
            </Row>
        </CardSubtitle>
    )
}