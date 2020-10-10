import React from 'react'
import { Link } from 'gatsby'
import { Button, CardTitle } from 'reactstrap'
import { PostTitleProps } from '../types'

export default function PostTitle({ title, slug, path, onClick }: PostTitleProps) {
    return (
        <CardTitle>
            {path && slug
                ? (<Link to={slug}>
                    <h3>
                        {title}
                    </h3>
                </Link>)
                : (<Button color="link" className='text-left' onClick={onClick} onKeyPress={onClick} tabIndex={0}>
                    <h3>
                        {title}
                    </h3>
                </Button>)
            }
        </CardTitle>
    )
}