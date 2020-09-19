import Link from 'next/link'
import { CardTitle } from 'reactstrap'
import { PostTitleProps } from '../types'

export default function PostTitle({ title, slug, path, onClick }: PostTitleProps) {
    return (
        <CardTitle>
            <h3>
                {path
                    ? (<Link as={`${path}/${slug}`} href={`${path}/[slug]`}>
                        <a>{title}</a>
                    </Link>)
                    : (<a href="#" onClick={onClick}>{title}</a>)
                }
            </h3>
        </CardTitle>
    )
}