import Link from 'next/link'
import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { PostImageProps } from '../types'

export default function PostImage({ title, picture, slug, rounded, path }: PostImageProps) {
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
                <Link as={`${path}/${slug}`} href={`${path}/[slug]`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
