import Link from 'next/link'
import Img from 'react-optimized-image'
import { images } from '../lib/images'
import { PostImageProps } from '../types'

export default function PostImage({ className, title, picture, slug, rounded, path, onClick }: PostImageProps) {
    const classRounded = rounded ? ' rounded' : '';
    const image = (
        <img
            src={images[picture]}
            alt={'Cover Image for' + title}
            className={'img-fluid' + classRounded}
        />
    );
    return (
        <div className={className}>
            {slug
                ? path
                    ? (<Link as={`${path}/${slug}`} href={`${path}/[slug]`}>
                        <a aria-label={title}>{image}</a>
                    </Link>)
                    : (<a href="#" onClick={onClick} aria-label={title}>{image}</a>)
                : (image)
            }
        </div>
    );
}
