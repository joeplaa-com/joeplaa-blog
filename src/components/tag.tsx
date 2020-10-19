import React from 'react'
import { Link } from 'gatsby'
import { Badge } from 'reactstrap'
import { IconContext } from 'react-icons'
import TagIcon from './tagIcon'
import { TagProps } from '../types'

const Tag = ({ tag }: TagProps) => {
    return (
        <Link to={`/tags/${tag.value}`}>
            <Badge color='primary' href='#' className='tag'>
                <IconContext.Provider value={{ size: '1.5rem', className: 'mr-1' }}>{TagIcon(tag.value)}</IconContext.Provider>
                <span>{tag.value.toUpperCase()}</span>
            </Badge>
        </Link>
    );
}

export default Tag;