import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { Col, Row } from 'reactstrap'
import { FrontMatterProps } from '../types'

type BookProps = {
    frontmatter: FrontMatterProps
}

const Video = ({ frontmatter }: BookProps) => {
    const { author, cover, date, excerpt, tags, title } = frontmatter;
    return (
        <>
            <Row>
                <Img fluid={cover.childImageSharp.fluid} />
            </Row>
            <Row>
                <Col>
                    {author}, {date}, {excerpt}, {tags}, {title}
                </Col>
            </Row>
        </>
    )
}

export default Video;