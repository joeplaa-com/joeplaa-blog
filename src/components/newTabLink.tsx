import React from 'react'
import { NewTabProps } from '../types'

const NewTabLink = ({ children, className, href, text }: NewTabProps) => {
    return <a href={href} target='_blank' rel='noopener noreferrer' className={className}>{children ? children : text}</a>
}

export default NewTabLink