import { useDispatch } from 'react-redux'
import { Badge } from 'reactstrap'
import { FaHashtag } from 'react-icons/fa'
import { filterActionCreators } from '../store/actions/filter'
import { TagProps } from '../types'

export default function Tag({ tag, page }: TagProps) {
    const dispatch = useDispatch();
    return (
        <Badge color='primary' className='tag' href='#' onClick={() => dispatch(filterActionCreators.setTagsFilter(page, [tag]))}>
            <FaHashtag /><span>{tag.value.toUpperCase()}</span>
        </Badge>
    );
}
