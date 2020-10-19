import React from 'react'
import { CardSubtitle, Col, Row } from 'reactstrap'
import Tag from './tag'
import formatPostTags from '../utils/formatPostTags'
import { PostSubtitleProps, LabelProps } from '../types'

export default function PostSubtitle({ className, date, pathname, tags }: PostSubtitleProps) {
    return (
        <CardSubtitle className={className}>
            <Row>
                <Col xs='12' className='d-inline-flex align-items-center'>
                    <em>{date}</em>
                    {pathname.includes('blog')
                        ? null
                        : <span className='tags'>
                            {formatPostTags(tags).map((tag: LabelProps) => (
                                <Tag key={tag.value} tag={tag} />
                            ))}
                        </span>}
                </Col>
                {pathname.includes('blog')
                    ? <Col xs='12' className='tags'>
                        {formatPostTags(tags).map((tag: LabelProps) => (
                            <Tag key={tag.value} tag={tag} />
                        ))}
                    </Col>
                    : null}
            </Row>
        </CardSubtitle>
    )
}