import React from 'react'
import { template } from '../lib/constants'
import { data, siteInfo, urls } from '../lib/data'
import linkColor from '../lib/linkColor'
import { LinkProps } from '../types'

export default function Copyright({ color }: LinkProps) {
    return (
        <div className='text-center'>
            {'© '}<a className={linkColor(color)} href={urls.website}>{siteInfo.BusinessName}</a>{' '}{new Date().getFullYear()}{'. '}{data.AllRightsReserved}
            {' '}{template.copy}{' '}<a className={linkColor(color)} href={template.url}>{template.name}{'.'}</a>
        </div>
    );
}