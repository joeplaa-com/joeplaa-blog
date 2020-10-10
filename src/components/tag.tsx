import React from 'react'
import { useDispatch } from 'react-redux'
import { Badge } from 'reactstrap'
import { IconContext } from 'react-icons'
import TagIcon from './tagIcon'
import { filterActionCreators } from '../store/actions/filter'
import { TagProps } from '../types'

export default function Tag({ tag, page }: TagProps) {
    const dispatch = useDispatch();

    return (
        <Badge color='primary' className='tag' href='#' onClick={() => dispatch(filterActionCreators.setTagsFilter(page, [tag]))}>
            <IconContext.Provider value={{ size: '1.5rem', className: 'mr-1' }}>{TagIcon(tag.value)}</IconContext.Provider>
            <span>{tag.value.toUpperCase()}</span>
        </Badge>
    );
}