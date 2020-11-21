import React from 'react'
import { Link } from './customLink'
import { template } from '../utils/constants'
import { metaData } from '../utils/data'
import linkColor from '../utils/linkColor'
import { FooterLinkProps } from '../types'

export default function Copyright({ color }: FooterLinkProps) {
    return (
        <>
            <Link className={linkColor(color)} to={process.env.GATSBY_URL}>{metaData.BusinessName}</Link>{' '}{new Date().getFullYear()}{'.'}
            {' '}{template.copy}{' '}<Link className={linkColor(color)} to={template.url}>{template.name}{'.'}</Link>
        </>
    );
}