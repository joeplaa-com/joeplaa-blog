import { CardSubtitle } from 'reactstrap'
import DateFormater from './date-formater'
import Tag from './tag'
import getTags from '../lib/getTags'
import { PostSubtitleProps } from '../types'

export default function PostSubtitle({ className, date, page, tags }: PostSubtitleProps) {
    return (
        <CardSubtitle className={className}>
            <em><DateFormater dateString={date} /></em>
            <span className='ml-1 tags'>
                {getTags(tags).map((tag) => (
                    <Tag key={tag.value} tag={tag} page={page} />
                ))}
            </span>
        </CardSubtitle>
    )
}