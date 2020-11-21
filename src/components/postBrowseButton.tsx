import React from 'react'
import { Button } from 'reactstrap'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from './customLink'
import { PostButtonProps } from '../types'
import { content } from '../utils/data'

const PostBrowseButton = ({ page, title, to, type }: PostButtonProps) => {
    return (
        <Link to={to}>
            <Button outline color='primary'>
                <IconContext.Provider value={{ size: '2rem' }}>
                    <span className='d-inline-flex justify-content-center align-items-center'>
                        {type === 'previous' ? <span><MdKeyboardArrowLeft /></span> : null}
                        <span className={type === 'previous' ? 'text-left' : 'text-right'}>
                            {type === 'previous'
                                ? page === 'recommended'
                                    ? content.PreviousRecommendation
                                    : content.PreviousPost 
                                : page === 'recommended'
                                    ? content.NextRecommendation
                                    : content.NextPost}
                            {title}
                        </span>
                        {type === 'next' ? <span><MdKeyboardArrowRight /></span> : null}
                    </span>
                </IconContext.Provider>
            </Button>
        </Link>
    )
}

export default PostBrowseButton