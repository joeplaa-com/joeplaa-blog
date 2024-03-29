import React, { ReactElement } from 'react';
import { Col, Row } from 'reactstrap';
import YouTube from 'react-youtube';
import { FrontMatterProps } from '../types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type VideoProps = {
    body: string
    frontmatter: FrontMatterProps
}

const Video = ({ body, frontmatter }: VideoProps): ReactElement => {
    const { author, date, links, title } = frontmatter;
    const content = <MDXRenderer>{body}</MDXRenderer>;

    return (
        <>
            <Row className='mb-2 mt-2'>
                <Col xs='12' sm='4' md='3' style={{ fontWeight: 600 }}>Title:</Col>
                <Col xs='12' sm='8' md='9'>{title}</Col>
            </Row>
            <Row className='mb-2 mt-2'>
                <Col xs='12' sm='4' md='3' style={{ fontWeight: 600 }}>Author:</Col>
                <Col xs='12' sm='8' md='9'>{author}</Col>
            </Row>
            <Row className='mb-2 mt-2'>
                <Col xs='12' sm='4' md='3' style={{ fontWeight: 600 }}>Added on:</Col>
                <Col xs='12' sm='8' md='9'>{date}</Col>
            </Row>
            <Row className='mb-2 mt-2'>
                <Col xs='12' sm='4' md='3' style={{ fontWeight: 600 }}>My thoughts:</Col>
                <Col xs='12' sm='8' md='9'>{content}</Col>
            </Row>
            <Row>
                <Col xs='12'>
                    <YouTube
                        containerClassName='youtubeContainer'
                        videoId={links?.youtube}
                        opts={{
                            width: '100%',
                            height: '100%',
                            playerVars: {
                                iv_load_policy: 3 as const
                            }
                        }}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Video;
