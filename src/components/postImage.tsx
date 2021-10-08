import React, { ReactElement } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from './customLink';
import { PostImageProps } from '../types';

export default function PostImage({ title, picture, slug, rounded, path, onClick, height }: PostImageProps): ReactElement {
    const classRounded = rounded ? 'rounded' : '';
    const imageStyle = { maxWidth: '1080px', maxHeight: height ? height + 'px' : '540px', margin: 'auto' };
    const image = (
        <GatsbyImage
            image={picture.gatsbyImageData}
            alt={'Cover Image for ' + title}
            objectFit="cover"
            objectPosition="50% 50%"
            className={classRounded}
            style={imageStyle} />
    );
    return (
        <div className={'shadow mb-3 ' + classRounded} style={imageStyle}>
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
