import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { PostImageProps } from '../types'

export default function PostImage({ title, picture, slug, rounded, path, onClick, height }: PostImageProps) {
    const classRounded = rounded ? ' rounded' : '';
    const imageStyle = { maxWidth: '1080px', maxHeight: height ? height + 'px' : '540px' };
    const image = (
        <Img fluid={picture.fluid} alt={'Cover Image for ' + title} objectFit="cover" objectPosition="50% 50%" className={'img-fluid mx-auto' + classRounded} style={imageStyle} />
    );
    return (
        <>
            {slug
                ? path
                    ? (<Link to={slug}>
                        {image}
                    </Link>)
                    : (<span onClick={onClick} onKeyPress={onClick} role='button' tabIndex={0}>{image}</span>)
                : (image)
            }
            <div className="overlay-blur"></div>
        </>
    );
}