import Link from 'next/link'
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap'
import Avatar from './avatar'
import CoverImage from './cover-image'
import DateFormater from './date-formater'
import Tag from './tag'
import getTags from '../lib/getTags'
import { PostTypeProps } from '../types'

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    tags,
    page
}: PostTypeProps) {
    return (
        <section>
            <Card>
                <CardBody>
                    <CardTitle>
                        <h3>
                            <Link as={`${page}/${slug}`} href={`${page}/[slug]`}>
                                <a>{title}</a>
                            </Link>
                        </h3>
                    </CardTitle>

                    <CardSubtitle>
                        <em><DateFormater dateString={date} /></em>
                        <span className='tags'>
                            {getTags(tags).map((tag) => (
                                <Tag key={tag.value} tag={tag} page={page} />
                            ))}
                        </span>
                    </CardSubtitle>
                </CardBody>

                <CoverImage title={title} picture={coverImage} slug={slug} page={page} />

                <CardBody>
                    <CardText>{excerpt}</CardText>

                    <Avatar name={author.name} picture={author.picture} />
                </CardBody>
            </Card>
        </section>
    );
}
