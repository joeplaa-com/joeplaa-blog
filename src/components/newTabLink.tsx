import React, { ReactElement } from 'react';
import { NewTabProps } from '../types';

const NewTabLink = ({ children, className, href, text }: NewTabProps): ReactElement => {
    return <a href={href} target='_blank' rel='noopener noreferrer' className={className}>{children || text}</a>;
};

export default NewTabLink;
