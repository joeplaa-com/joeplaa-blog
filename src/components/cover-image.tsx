import Link from 'next/link'
import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { CoverImageProps } from '../types'

export default function CoverImage({ title, picture, slug, rounded, page }: CoverImageProps) {
    const className = rounded ? ' rounded' : '';
    const image = (
        <img
            src={images[picture]}
            alt={'Cover Image for' + title}
            className={'img-fluid' + className}
        />
    );
    return (
        <div>
            {slug ? (
                <Link as={`${page}/${slug}`} href={`${page}/[slug]`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
