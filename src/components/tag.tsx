import React from 'react'
import { Link } from 'gatsby'
import { Badge } from 'reactstrap'
import { IconContext } from 'react-icons'
import kebabCase from 'lodash/kebabCase'
import TagIcon from './tagIcon'
import { TagProps } from '../types'

const Tag = ({ tag }: TagProps) => {
    return (
        <Link to={`/tags/${kebabCase(tag.value)}`}>
            <Badge color='primary' className='tag' href='#'>
                <IconContext.Provider value={{ size: '1.125rem', className: 'mr-1' }}>{TagIcon(tag.value)}</IconContext.Provider>
                <span>{tag.value.toUpperCase()}</span>
            </Badge>
        </Link>
    );
}

export default Tag;