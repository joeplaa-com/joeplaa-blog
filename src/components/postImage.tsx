import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { PostImageProps } from '../types'

export default function PostImage({ className, title, picture, slug, rounded, path, onClick }: PostImageProps) {
    const classRounded = rounded ? ' rounded' : '';
    const image = (
        <Img fluid={picture.fluid} alt={'Cover Image for ' + title} objectFit="cover" objectPosition="50% 50%" className={'img-fluid mx-auto' + classRounded} style={{ maxWidth: '960px', maxHeight: '540px' }} />
    );
    return (
        <div className={className}>
            {slug
                ? path
                    ? (<Link to={slug}>
                        {image}
                    </Link>)
                    : (<span onClick={onClick} onKeyPress={onClick} role='button' tabIndex={0}>{image}</span>)
                : (image)
            }
        </div>
    );
}