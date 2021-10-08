import React, { ReactElement } from 'react';
import Image from './image';
import Social from './social';
import { content } from '../utils/content';
import { BannerProps } from '../types';

const Banner = (props: BannerProps): ReactElement => {
    const { title, subtitle, src, alt } = props;
    return (
        <section id={content.Banner}>
            <div className='image-container'>
                <Image
                    src={src}
                    alt={alt}
                    className="mx-auto"
                    style={{ minHeight: '70vh' }}
                />
                <div className="image-overlay-image"></div>
                <div className='image-overlay-text flex-column text-center'>
                    <h1 className='display-1'>{title}</h1>
                    <h2>{subtitle}</h2>
                    <Social color='light' key='Banner' size='2rem' />
                </div>
            </div>
        </section>
    );
};

export default Banner;
