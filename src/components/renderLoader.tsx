import React from 'react'
import { Spinner } from 'reactstrap'
import { content } from '../utils/data'

const RenderLoader = () => (<><Spinner />{' '}<p>{content.Loading}</p></>);
export default RenderLoader