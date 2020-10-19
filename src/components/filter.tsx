import React from 'react'
import { navigate } from '@reach/router'
import { Button, Col, Row } from 'reactstrap'
import { IconContext } from 'react-icons'
import { MdArrowBack } from 'react-icons/md'
import Tag from '../components/tag'
import { content } from '../utils/data'
import { FilterProps } from '../types'

export default function Filter({ back, className, pathname, quantity, tags }: FilterProps) {
    return (
        <Row className={'d-flex justify-content-between align-items-center' + ' ' + className}>
            <Col className='align-items-center flex-wrap tags'>
                {tags.map(tag => (
                    <Tag key={tag.value} quantity={quantity || false} tag={tag} />
                ))}
            </Col>
            {pathname.includes('tags') || back
                ? <Col xs='auto' className='mt-2 mt-sm-0 ml-auto'>
                    <Button outline color='primary' onClick={() => navigate(-1)} className="d-inline-flex justify-content-center align-items-center" aria-label='filter-button'>
                        <IconContext.Provider value={{ size: '1.25rem' }}><MdArrowBack /></IconContext.Provider>
                        <span className={'d-none d-sm-flex mr-1'}>{content.Back}</span>
                    </Button>
                </Col>
                : null}
        </Row>
    );
}