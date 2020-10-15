import React from 'react'
import { Spinner } from 'reactstrap'
import { content } from '../utils/data'

const RenderLoader = () => (
    <div className='loader'>
        <Spinner color="primary" />{' '}<p>{content.Loading}</p>
    </div>
);
export default RenderLoader