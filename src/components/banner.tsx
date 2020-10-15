import React from 'react'
import Image from './image'
import Social from './social'
import { content } from '../utils/data'
import { BannerProps } from '../types'

const Banner = (props: BannerProps) => {
    const { title, subtitle, src, alt } = props;
    return (
        <section id={content.Banner}>
            <div className='image-container'>
                <Image
                    src={src}
                    alt={alt}
                    className="mx-auto"
                />
                <div className="overlay-image"></div>
                <div className='overlay-text flex-column text-center'>
                    <h1 className='display-1'>{title}</h1>
                    <h2>{subtitle}</h2>
                    <Social color='light' size='2rem' />
                </div>
            </div>
        </section>
    );
}

export default Banner;