import React, { ReactElement } from 'react';
import { Button, CardTitle } from 'reactstrap';
import { Link } from './customLink';
import { PostTitleProps } from '../types';

export default function PostTitle({ title, slug, path, onClick }: PostTitleProps): ReactElement {
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
    );
}
