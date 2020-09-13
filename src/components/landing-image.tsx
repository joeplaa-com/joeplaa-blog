import Link from 'next/link'
import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { LandingImageProps } from '../types'

export default function CoverImage({ title, picture, link }: LandingImageProps) {
    const image = (
        <img
            src={images[picture]}
            alt={'Cover Image for' + title}
            className='img-fluid'
        />
    );
    return (
        <div>
            <Link href={link}>
                <a aria-label={title}>{image}</a>
            </Link>
        </div>
    );
}
