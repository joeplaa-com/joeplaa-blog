import React from 'react'
import { template } from '../utils/constants'
import { metaData } from '../utils/data'
import linkColor from '../utils/linkColor'
import { FooterLinkProps } from '../types'

export default function Copyright({ color }: FooterLinkProps) {
    return (
        <>
            <a className={linkColor(color)} href={process.env.GATSBY_URL}>{metaData.BusinessName}</a>{' '}{new Date().getFullYear()}{'.'}
            {' '}{template.copy}{' '}<a className={linkColor(color)} href={template.url}>{template.name}{'.'}</a>
        </>
    );
}