import React from 'react'
import { Spinner } from 'reactstrap'
import { content } from '../utils/data'

const RenderLoader = () => (
    <div className='loader'>
        <Spinner color="primary" /><span className='ml-1'>{content.Loading}</span>
    </div>
);
export default RenderLoader