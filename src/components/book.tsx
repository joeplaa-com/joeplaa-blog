import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Col, Row } from 'reactstrap'
import NewTabLink from './newTabLink'
import useSiteSettings from '../hooks/useSiteSettings'
import { FrontMatterProps } from '../types'

type BookProps = {
    frontmatter: FrontMatterProps
}

const Book = ({ frontmatter }: BookProps) => {
    const { breakpoint } = useSiteSettings();
    const { author, cover, date, excerpt, id, links, subtitle, title } = frontmatter;
    const imageStyle = { maxWidth: '480px' };
    const image = (
        <Img fluid={cover.childImageSharp.fluid} alt={'Cover Image for ' + title} objectFit="cover" objectPosition="50% 50%" className={'img-fluid mx-auto'} style={imageStyle} />
    );
    return (
        <Row>
            <Col xs='12' className={`col-${breakpoint}-6`}>
                {image}
            </Col>
            <Col xs='12' className={`col-${breakpoint}-6 my-auto`}>
                <Row className='mb-2 mt-2'>
                    <Col xs='12' md='4' lg='3' style={{ fontWeight: 600 }}>Title:</Col>
                    <Col xs='12' md='8' lg='9'>{title}{subtitle ? <span>: {subtitle}</span> : null}</Col>
                </Row>
                <Row className='mb-2 mt-2'>
                    <Col xs='12' md='4' lg='3' style={{ fontWeight: 600 }}>Author:</Col>
                    <Col xs='12' md='8' lg='9'>{author}</Col>
                </Row>
                <Row className='mb-2 mt-2'>
                    <Col xs='12' md='4' lg='3' style={{ fontWeight: 600 }}>ASIN:</Col>
                    <Col xs='12' md='8' lg='9'>{id?.asin}</Col>
                </Row>
                <Row className='mb-2 mt-2'>
                    <Col xs='12' md='4' lg='3' style={{ fontWeight: 600 }}>ISBN:</Col>
                    <Col xs='12' md='8' lg='9'>{id?.isbn}</Col>
                </Row>
                <Row className='mb-2 mt-2'>
                    <Col xs='12' md='4' lg='3' style={{ fontWeight: 600 }}>More about the book:</Col>
                    <Col xs='12' md='8' lg='9'>
                        {links ? <NewTabLink href={'https://www.amazon.com/gp/product/' + links.amazon} text='Buy from Amazon / Kindle' /> : null}<br />
                        {links ? <NewTabLink href={'https://www.kobo.com/nl/en/ebook/' + links.kobo} text='Buy from Kobo' /> : null}<br />
                        {links ? <NewTabLink href={'https://www.goodreads.com/book/show/' + links.goodreads} text='More on Goodreads' /> : null}
                    </Col>
                </Row>
                <Row className='mb-2 mt-2'>
                    <Col xs='12' md='4' lg='3' style={{ fontWeight: 600 }}>Added on:</Col>
                    <Col xs='12' md='8' lg='9'>{date}</Col>
                </Row>
                <Row className='mb-2 mt-2'>
                    <Col xs='12' md='4' lg='3' style={{ fontWeight: 600 }}>My thoughts:</Col>
                    <Col xs='12' md='8' lg='9'>{excerpt}</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Book;