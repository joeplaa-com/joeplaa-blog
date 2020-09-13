import Link from 'next/link';
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap'
import DateFormater from './date-formater'
import CoverImage from './cover-image'
import Tag from './tag'
import getTags from '../lib/getTags'
import { PostTypeProps } from '../types'

export default function PortfolioPreview({
    title,
    coverImage,
    date,
    excerpt,
    slug,
    tags,
    page
}: PostTypeProps) {
    return (
        <Card>
            <CardBody>
                <div className='mb-2'>
                    <CoverImage slug={slug} title={title} picture={coverImage} rounded={true} page={page} />
                </div>

                <CardTitle>
                    <h3>
                        <Link as={`${page}/${slug}`} href={`${page}/[slug]`}>
                            <a>{title}</a>
                        </Link>
                    </h3>
                </CardTitle>

                <CardSubtitle className='mb-2'>
                    <em><DateFormater dateString={date} /></em>
                    <span className='tags'>
                        {getTags(tags).map((tag) => (
                            <Tag key={tag.value} tag={tag} page={page} />
                        ))}
                    </span>
                </CardSubtitle>

                <CardText>{excerpt}</CardText>
            </CardBody>
        </Card>
    );
}
