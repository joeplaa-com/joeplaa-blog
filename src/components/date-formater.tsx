import { parseISO, format } from 'date-fns'
import { settings } from '../lib/data'
import { DateFormatterProps } from '../types'

export default function DateFormater({ dateString }: DateFormatterProps) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, settings.dateFormat)}</time>;
}
