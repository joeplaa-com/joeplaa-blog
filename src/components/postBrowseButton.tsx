import { Link } from 'gatsby'
import React from 'react'
import { Button } from 'reactstrap'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { content } from '../utils/data'

const PostBrowseButton = ({ title, to, type }: { title: string, to: string, type: string }) => {

    return (
        <Link to={to}>
            <Button outline color='primary'>
                <IconContext.Provider value={{ size: '2rem' }}>
                    <span className='d-inline-flex justify-content-center align-items-center'>
                        {type === 'previous' ? <span><MdKeyboardArrowLeft /></span> : null}
                        <span className={type === 'previous' ? 'text-left' : 'text-right'}>
                            {type === 'previous' ? content.PreviousPost : content.NextPost}
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